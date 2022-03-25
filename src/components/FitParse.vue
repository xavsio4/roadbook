<template>
  <div>
    <input type="file" @change="onFileChanged($event)" accept=".fit" capture />
    <button class="btn" @click="saveImage">Send</button>
  </div>
</template>
<script>
  import { ref, context } from "vue";
  //import {FitParse} from "fit-file-parser";
  import axios from "axios";

  export default {
    name: "FileUpload",

    setup(context) {
      const file = ref();
      const form = ref();
      const result = ref();

      function onFileChanged($event) {
        const target = $event.target;
        if (target && target.files) {
          file.value = target.files[0];
        }
      }

      async function saveImage() {
        if (file.value) {
          let formData = new FormData();
          formData.append("file", file.value);
          try {
            await axios
              .post(
                "http://localhost/microlumen2/public/v1/gps/filein",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
                // { headers: { Authorization: `Bearer ${token}` } }
              )
              .then((response) => {
                result.value = response.data;
                context.emit(result.value);
              });
          } catch (error) {
            console.error(error);
            form.value?.reset();
            file.value = null;
          } finally {
            console.log("er");
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
