<template>
    <div>
        {{msg}}
    </div>
</template>
<script>
export default {
    props: ["data"],
    computed: {
        show() {
            console.log(this.data);
        }
    },
    data(){
        
        return [{
            mame:'测试问题'
        },{
            name:'试卷问题'
        }
        ]
    }
}
</script>

