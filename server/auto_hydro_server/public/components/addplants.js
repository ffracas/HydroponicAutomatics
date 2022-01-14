Vue.component('plantsdata', {
    data: function() {
      return {
          plantData: {
            typeP: "mediterranea",
            nameP: "piantina",
            scientNameP: "Piantinus"
          },
          envData: {
              temperature: 800,
              umidity: 80
          },
          waterData: {
              level: 21,
              temperature: 200,
              solidN: 321.123,
              pH: 7.1
          }
      }
    },
    template: `
    <div>
        <h3>Impianto idroponico 1</h3>
        <div class="plantType">
            <b>{{this.plantData.typeP}}</b> {{this.plantData.nameP}} ({{this.plantData.scientNameP}})
        </div>
        <div class="envData">
            temperatura: {{this.envData.temperature}} C</br>
            umidità: {{this.envData.umidity}} %</br>
        </div>
        <div class="waterData">
            livello acqua: {{this.waterData.level}} l</br>
            temperatura: {{this.waterData.temperature}} C</br>
            nutrienti: {{this.waterData.solidN}} ppm</br>
            pH: {{this.waterData.pH}}</br>
        </div>
        <input type="submit" value="Save" @click.prevent="save" >
    </div>
    `,
    methods: {
        save() {
            axios.post("/plantinfo/save", {
                plantData: {
                    typeP: "cazzatee",
                    nameP: "pianta sticazzi",
                    scientNameP: "sticazzibus"
                },
                envData: {
                    temperature: 800,
                    humidity: 80
                },
                waterData: {
                    level: 21,
                    temperature: 200,
                    solidN: 321.123,
                    pH: 7.1
                },
                date: "2022-01-01-12:10"
            });
            console.log("save start")
        }
    }
});