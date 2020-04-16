<template>
    
</template>

<script>
export default {
    methods:{
        axios1(){
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(61);
                },2000)
            })
        },
        axios2(num){
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    if(num > 60){
                        resolve('ojbk');
                    }else{
                        reject('njbk');
                    }
                },1000)
            })
        },
        async chose(){
            let a2 = await this.axios2(await this.axios1());
            console.log(a2);
        }
    },
    mounted(){
        this.chose();
    }
}
</script>

<style>

</style>