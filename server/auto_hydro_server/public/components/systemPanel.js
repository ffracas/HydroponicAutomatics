Vue.component('system-panel', {
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
    </div>
    `
});