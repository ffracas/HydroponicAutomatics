Vue.component('tabledata', {
    mounted() {
        //this.init();
    },
    methods: {
        init: function(){
            
        },
        showChart: function(){
            
        },
        getData: function(){
            result = []
            for(item of this.data){
                result.push(item.envTemp);
            }                
            return result;
        },
        getLabel: function() {
            result = []
            for(item in this.data)
                result.push(item.date)
            return result;
        }
    },
    data: function(){
        return{
            data: [
                { date: "11/11/11_12:15", envTemp: 800, envHumid: 89, watTemp: 200, watLvl: 2, watPh: 7.1, watNut: 245.31 },
                { date: "11/11/11_12:30", envTemp: 700, envHumid: 88, watTemp: 300, watLvl: 1, watPh: 7.0, watNut: 245.31 },
                { date: "11/11/11_12:45", envTemp: 600, envHumid: 90, watTemp: 400, watLvl: 2, watPh: 7.2, watNut: 245.31 },
                { date: "11/11/11_13:00", envTemp: 500, envHumid: 79, watTemp: 500, watLvl: 1, watPh: 7.1, watNut: 245.31 },
                { date: "11/11/11_13:15", envTemp: 400, envHumid: 85, watTemp: 400, watLvl: 2, watPh: 7.1, watNut: 245.31 }
            ],
            ctx: {},
            chart: {}
        }
    },
    template: `
    <div class="graph-table">
        <h3>Tipo pianta</h3>
        <table style="width:50%">
            <tr>
                <th>data</th>
                <th>temperatura</th>
                <th>umidità</th>
                <th>livello acqua</th>
                <th>temperatura</th>
                <th>nutrienti</th>
                <th>pH</th>
            </tr>
            <tr v-for="(item) in data">
                <td>{{item.date}}</td>
                <td>{{item.envTemp}}</td>
                <td>{{item.envHumid}}</td>
                <td>{{item.watLvl}}</td>
                <td>{{item.watTemp}}</td>
                <td>{{item.watNut}}</td>
                <td>{{item.watPh}}</td>
            </tr>
        </table>
    </div>
    `
});