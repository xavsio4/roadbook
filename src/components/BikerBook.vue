<template>
  <div>
    <h2 class="text-2xl font-bold">GPX Road Book Maker</h2>
    <gpx-parse @gpxLoaded="upgpx"></gpx-parse>
    <div class="flex w-full">
      <widget class="flex-1"
        ><div class="flex-1 btn btn-outline btn-accent" @click="inverse">
          Inverse
        </div></widget
      >
      <widget class="flex-1"
        >{{ etapes.length }} day(s)
        <span class="text-xl" v-show="etapes.length > 0"
          >avg/day {{ (avg / etapes.length).toFixed(2) }} Km</span
        >
        <div class="btn btn-xs" @click="reset">Reset</div></widget
      >
      <widget class="flex-1" v-if="info.lenght > 1">{{
        info[info.length - 1].fields.kmcumul
      }}</widget>
      <widget
        >Total trip :<span class="text-xl" v-if="info.length > 0"
          >{{ highest.toFixed(2) }} Km</span
        >
      </widget>
      <widget
        ><button @click="print" class="btn">Print</button
        ><button @click="csvExport(info)" class="btn">csv</button></widget
      >
    </div>
    <div v-if="info.length > 0" id="roadbook">
      <div
        class="grid grid-cols-5"
        v-for="(item, index) in info"
        :index="index"
        :key="item.id"
      >
        <div>{{ item.point }}</div>
        <div>{{ parseFloat(item.stats.distance / 1000).toFixed(2) }} km</div>
        <div>{{ parseFloat(item.kmcumul).toFixed(2) }} km</div>
        <div>
          <input
            type="checkbox"
            name="accept"
            :value="index"
            @click="makelap(index)"
          />
        </div>
        <div>{{ item.etape }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  //$event.target.value,
  import { ref, computed } from "vue";
  import Widget from "./CardWidget.vue";
  import GpxParse from "./GpxParse.vue";
  //import axios from "axios";

  export default {
    name: "BikerBook",
    components: { Widget, GpxParse },
    setup() {
      const info = ref([]);
      const etapes = ref([]);
      // const token = process.env.VUE_APP_AIRTABLE_API;

      // highest trip distance of the GPX
      const highest = computed(() => {
        return info.value[info.value.length - 1].kmcumul;
      });
      // get the highest distance on etape
      const avg = computed(() => {
        if (etapes.value.length > 0) {
          return etapes.value[etapes.value.length - 1].km;
        } else return 0;
      });

      function resetCheckboxes() {
        var checkboxes = document.getElementsByName("accept");
        for (var cb = 0, n = checkboxes.length; cb < n; cb++) {
          checkboxes[cb].checked = false;
        }
      }

      //gpx gpx_loaded
      function upgpx(data) {
        info.value = data;
        addCustomFields();
      }

      //Reset
      function reset() {
        resetCheckboxes();
        etapes.value = [];
        for (var i = 0; i < info.value.length; i += 1) {
          info.value[i].etape = "";
        }
      }

      //customize data
      function addCustomFields() {
        var km = 0;
        for (var i = 0; i < info.value.length; i += 1) {
          km = km + parseFloat(info.value[i].stats.distance) / 1000;
          info.value[i].kmcumul = km;
          info.value[i].etape = "";
        }
      }

      //function makelap
      function makelap(i) {
        // vérifier si l'étape est déjà dans la liste
        let aa = etapes.value.findIndex((box) => box.index == i);
        if (aa === -1) {
          // si pas encore dans étapes
          etapes.value.push({ index: i, km: info.value[i].kmcumul });
          //on met les étapes dans l'ordre.
          etapes.value.sort((a, b) => {
            return a.index - b.index; //for descending inverse a and b
          });
        } else {
          //sinon
          etapes.value.splice(aa, 1);
          info.value[i].etape = "";
        }
        // and now add steps to info
        let saved_index = -1;
        for (let o = 0; o < etapes.value.length; o++) {
          if (saved_index === -1) {
            // first iteration
            info.value[etapes.value[o].index].etape =
              "Jour " + (o + 1) + " : " + etapes.value[o].km.toFixed(2) + "km";
          } else {
            info.value[etapes.value[o].index].etape =
              "Jour " +
              (o + 1) +
              " : " +
              (etapes.value[o].km - etapes.value[o - 1].km).toFixed(2) +
              "km";
          }
          saved_index = etapes.value[o].index;
          console.log(saved_index);
        } // for
      } // /makelap function

      // reverse the traject
      function inverse() {
        info.value.reverse();
        //we have to change waypoints order
        for (const item of info.value) {
          console.log(item);
          var arrPoints = item.point.split("/").reverse();
          var newStr = arrPoints.join(" / ");
          item.point = newStr;
        }
        //clean and recreate
        etapes.value = [];
        addCustomFields();
        //reset all checkboxes (not in the array)
        resetCheckboxes();
      }

      function csvExport(arrData) {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += [
          Object.keys(arrData[0]).join(";"),
          ...arrData.map((item) => Object.values(item).join(";")),
        ]
          .join("\n")
          .replace(/(^\[)|(\]$)/gm, "");

        const data = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", data);
        link.setAttribute("download", "export.csv");
        link.click();
      }

      // mounted
      /*  onMounted(async () => {
        await axios
          .get(
            "https://api.airtable.com/v0/appUD23VJXH03qoZa/EV3?view=Grid%20view",
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            var km = 0;
            for (var i = 0; i < response.data.records.length; i += 1) {
              km =
                km +
                parseFloat(response.data.records[i].fields.DistanceBetween);
              response.data.records[i].fields.kmcumul = km;
              response.data.records[i].fields.etape = "";
            }
            info.value = response.data.records;
          });
      }); */
      // end of setup
      return {
        info,
        etapes,
        highest,
        avg,
        makelap,
        inverse,
        upgpx,
        reset,
        csvExport,
      };
    }, //setup
    methods: {
      print() {
        this.$htmlToPaper("roadbook");
      },
    },
  };
</script>
