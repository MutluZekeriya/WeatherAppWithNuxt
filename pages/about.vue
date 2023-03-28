<template>
    <div class="container">
        <h1> {{ title }}</h1>
    </div>
</template>
<script>
export default {
    head() {
        return {
            title: "About Page Title",
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'About Page description',
                    name: 'About Page description',
                    content: 'About Page custom description'
                }
            ],
            link:[
                {rel: 'cnonical', href:'http:172.0.0.1:3000'}
            ]
        }
    },
    data(){
        return{
            title:"About Page"
        }
    }
}
</script>