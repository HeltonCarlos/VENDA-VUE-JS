const app = new Vue({
    el: '#app',
    data: {
     produtos:[],
     unidades:1
    },
    methods:{
        fetchProdutos(){
            fetch("./api/api.json")
            .then(r=> r.json())
            .then(r=>{
                this.produtos=r;
            })
        }
    },
    created(){
        this.fetchProdutos();
    }
  });   

