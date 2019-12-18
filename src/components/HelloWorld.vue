<template>
    <div class="hello">
        <el-container class="fm2-container">
            <el-main class="fm2-main">
                <el-container>
                    <el-aside width="500px">
                        <div class="components-list">
                            <div class="widget-cate">基础字段</div>
                            <draggable tag="ul" :list="basicComponents" v-bind="basicComponents" @end="handleMoveEnd" @start="handleMoveStart" :move="handleMove">

                                <li class="form-edit-widget-label" v-for="(item, index) in basicComponents" :key="index">
                                    <a>
                                        <i class="icon iconfont" :class="item.icon"></i>
                                        <span>{{item.name}}</span>
                                    </a>
                                </li>
                            </draggable>
                        </div>
                    </el-aside>
                </el-container>
            </el-main>
        </el-container>
        <!-- <itemList></itemList> -->
        <!-- <vuedraggable></vuedraggable> -->
        <!-- <van-button>按钮</van-button> -->
        <!-- <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checked">全选</van-checkbox>
            <span slot="tip">
                你的收货地址不支持同城送,
                <span>修改地址</span>
            </span>
        </van-submit-bar> -->
        <!-- 优惠券单元格 -->
        <!-- <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" /> -->

        <!-- 优惠券列表 -->
        <!-- <van-popup v-model="showList" position="bottom">
            <van-coupon-list :coupons="coupons" :chosen-coupon="chosenCoupon" :disabled-coupons="disabledCoupons" @change="onChange" @exchange="onExchange" />
        </van-popup> -->
        <!-- <Item>

        </Item> -->
    </div>
</template>

<script>
import Vue from "vue";
import { CouponCell, CouponList } from "vant";

Vue.use(CouponCell).use(CouponList);
const coupon = {
    available: 1,
    condition: "无使用门槛\n最多优惠12元",
    reason: "",
    value: 150,
    name: "优惠券名称",
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: "1.5",
    unitDesc: "元"
};
import { basicComponents } from "@/components/componentsConfig.js";
import Draggable from "vuedraggable";
import itemList from "@/components/itemList";
export default {
     metaInfo: {
        title: '首页',
        meta: [
            {
                name: 'keywords',
                content: '关键字'
            },
            {
                name: 'description',
                content: '网页描述'
            }
        ]
    },
    components: {
        itemList,
        Draggable
    },
    name: "HelloWorld",
    data() {
        return {
            basicComponents,
            msg: "Welcome to Your Vue.js App",
            checked: true,
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon],
            showList: false
        };
    },
    updated() {
        console.log(this.basicComponents);
    },
    methods: {
        onChange(index) {
            this.showList = false;
            this.chosenCoupon = index;
        },
        onExchange(code) {
            this.coupons.push(coupon);
        },
        onSubmit(val) {},
        handleMoveEnd(evt) {
            // console.log("end", evt);
        },
        handleMoveStart({ oldIndex }) {
            // let startChange = this.basicComponents;
            // startChange.map(function(val, index) {
            //     if (val.icon == "icon-input") {
            //         val.options.options.map(function(val, index) {
            //             // if (val.rightedValue) {
            //             //     val.rightedValue = "";
            //             // }
            //             val.value = val.label;
            //         });
            //     }
            // });
            // this.basicComponents = startChange
            console.log("start", this.basicComponents);
        },
        handleMove() {
            return true;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
