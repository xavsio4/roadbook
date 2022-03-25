<template>
  <div class="flex p-10 rounded-md shadow-lg">
    <button
      class="flex-none btn bg-indigo-400 hover:bg-indigo-800 text-white"
      onclick="document.getElementById('files').click()"
    >
      Load a GPX file
    </button>
    <div class="flex-1 text-lg mt-2 ml-6" id="write"></div>
    <input
      id="files"
      class="block w-full text-sm text-gray-500 file:btn file:bg-indigo-400 file:hover:bg-indigo-800 file:text-white"
      type="file"
      style="display: none"
      @change="onFileChanged($event)"
      accept=".gpx"
    />
    <button class="btn flex-none" @click="saveImage">Send</button>
  </div>
</template>
<script>
  import { ref } from "vue";
  //import {FitParse} from "fit-file-parser";
  import axios from "axios";

  export default {
    name: "FileUpload",

    setup(props, { emit }) {
      const file = ref();
      const form = ref();
      const result = ref();

      const gpxapi = process.env.VUE_APP_GPX_API;

      function onFileChanged($event) {
        const target = $event.target;
        if (target && target.files) {
          file.value = target.files[0];
          var afilepath = document.getElementById("files").value;
          document.getElementById("write").innerHTML = afilepath.replace(
            /^.*[\\/]/,
            ""
          );
        }
      }

      async function saveImage() {
        if (file.value) {
          let formData = new FormData();
          formData.append("file", file.value);
          try {
            await axios
              .post(
                gpxapi + "/v1/gps/filein",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
                // { headers: { Authorization: `Bearer ${token}` } }
              )
              .then((response) => {
                result.value = response.data.data;
                emit("gpxLoaded", result.value);
              });
          } catch (error) {
            console.error(error);
            form.value?.reset();
            file.value = null;
          } finally {
            console.log("all processed successfully");
          }
        }
      }

      return {
        saveImage,
        onFileChanged,
        result,
      };
    },
  };
</script>
<style scoped>
  input[type="file"]::file-selector-button {
    /* Add properties here */
  }
</style>
