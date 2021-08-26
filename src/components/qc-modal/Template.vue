<template>
    <div>
        <div id="menu-language" 
         class="menu menu-box-modal rounded-m" 
         data-menu-height="350" 
         data-menu-width="450">
            <div class="menu-title">
                <p class="color-highlight"></p>
                <h1 class="font-24"> {{data[0]['commands'][0]['options']['components'][0]['title']}} </h1>
                <a href="#" v-on:click="cModal" class="close-menu"><i class="fa fa-times-circle"></i></a>
            </div>
            <div class="me-3 ms-3 mt-3">
                <div class="list-group list-custom-small">
                    <!-- {{data[0]['commands'][0]['options']['components'][0]['components'][0]['model'] }} -->
                    <td v-for="column in data[0]['commands'][0]['options']['components'][0]['components'][0]['model']" :key="column">
                        {{column}}
                    </td>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Modal",
  data(){
    return{
        data: [{"type":"qc-voidcomponent","name":"layout","components":[],"commands":[{"command":"addComponents","options":{"components":[{"type":"qc-modal","name":"finance.modal","components":[{"type":"qc-form","name":"finance.form","components":[],"commands":[],"fields":{"amount":{"type":"new-text","label":"\u0421\u0443\u043c\u043c\u0430 ","disabled":true},"full_name":{"type":"new-text","label":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438","disabled":true},"bin":{"type":"new-text","label":"\u0411\u0418\u041d","disabled":true},"status":{"type":"new-text","label":"\u0421\u0442\u0430\u0442\u0443\u0441","disabled":true},"description":{"type":"new-textarea","label":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","disabled":true},"create_at":{"type":"new-text","label":"\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u0432","disabled":true},"type":{"type":"new-text","label":"\u0422\u0438\u043f","disabled":true}},"model":{"amount":"1000.00","full_name":"\u0422\u041e\u041e \u0022Bloomzed.kz\u0022","bin":"130640013376","status":"Completed","description":"payment Urta","create_at":"2021-08-16 10:04:16.213416","type":"Payment"}}],"commands":[],"title":"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0435"}]}}]}],
        data2: [{"type":"qc-table-filter","name":"qc-table-filter","components":[],"commands":[],"columns":{"type":{"label":"\u0422\u0438\u043f","model-path":"finance_type"},"sender_full_name":{"label":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c","model-path":"sender_full_name"},"sender_number":{"label":"\u0421\u0447\u0435\u0442\u0430 \u0438\u0437/\u0432","model-path":"sender_number"},"receiver_full_name":{"label":"\u041f\u043e\u043b\u0443\u0447\u0430\u0442\u0435\u043b\u044c","model-path":"receiver_full_name"},"date":{"label":"\u0414\u0430\u0442\u0430","model-path":"date"},"amount":{"label":"\u0421\u0443\u043c\u043c\u0430","model-path":"amount"},"status":{"label":"\u0421\u0442\u0430\u0442\u0443\u0441","model-path":"status"},"table-actions":{"label":"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f","actions":{"detail":{"label":"Detail","icon":"eye","actionUri":{},"type":"detail"},"reload":{"label":"Repeat","icon":"retry","actionUri":{},"type":"reload"},"reciver_number":{"type":"hidden","receiver_number":{}},"id":{"type":"hidden","id":{}}}}},"tableData":[{"type":"\u041f\u043b\u0430\u0442\u0435\u0436","sender_full_name":"baha","sender_number":3981105723188617,"receiver_full_name":"\u0422\u041e\u041e \u0022Bloomzed.kz\u0022","date":"2021.08.11","amount":"1200.00","status":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d","actions":{"detail":{"label":"Detail","icon":"eye","actionUri":"/get-merchant-finance-out","type":"detail"},"reload":{"label":"Repeat","icon":"retry","actionUri":"/finance-repeat","type":"reload"},"reciver_number":{"type":"hidden","receiver_number":{"receiver_number":3981101740298859}},"id":{"type":"hidden","id":{"id":3320}}}},{"type":"\u041f\u043b\u0430\u0442\u0435\u0436","sender_full_name":"baha","sender_number":3981105723188617,"receiver_full_name":"\u0422\u041e\u041e \u0022Bloomzed.kz\u0022","date":"2021.08.11","amount":"1200000.00","status":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d","actions":{"detail":{"label":"Detail","icon":"eye","actionUri":"/get-merchant-finance-out","type":"detail"},"reload":{"label":"Repeat","icon":"retry","actionUri":"/finance-repeat","type":"reload"},"reciver_number":{"type":"hidden","receiver_number":{"receiver_number":3981101740298859}},"id":{"type":"hidden","id":{"id":3319}}}},{"type":"\u041f\u043b\u0430\u0442\u0435\u0436","sender_full_name":"baha","sender_number":3981105723188617,"receiver_full_name":"\u0422\u041e\u041e \u0022Bloomzed.kz\u0022","date":"2021.08.11","amount":"1200000.00","status":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d","actions":{"detail":{"label":"Detail","icon":"eye","actionUri":"/get-merchant-finance-out","type":"detail"},"reload":{"label":"Repeat","icon":"retry","actionUri":"/finance-repeat","type":"reload"},"reciver_number":{"type":"hidden","receiver_number":{"receiver_number":3981101740298859}},"id":{"type":"hidden","id":{"id":3318}}}},{"type":"\u041f\u043b\u0430\u0442\u0435\u0436","sender_full_name":"baha","sender_number":3981105723188617,"receiver_full_name":"\u0422\u041e\u041e \u0022Bloomzed.kz\u0022","date":"2021.08.11","amount":"1200000.00","status":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d","actions":{"detail":{"label":"Detail","icon":"eye","actionUri":"/get-merchant-finance-out","type":"detail"},"reload":{"label":"Repeat","icon":"retry","actionUri":"/finance-repeat","type":"reload"},"reciver_number":{"type":"hidden","receiver_number":{"receiver_number":3981101740298859}},"id":{"type":"hidden","id":{"id":3317}}}},{"type":"\u041f\u043b\u0430\u0442\u0435\u0436","sender_full_name":"baha","sender_number":3981105723188617,"receiver_full_name":"\u0422\u041e\u041e \u0022Bloomzed.kz\u0022","date":"2021.08.11","amount":"1200000.00","status":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d","actions":{"detail":{"label":"Detail","icon":"eye","actionUri":"/get-merchant-finance-out","type":"detail"},"reload":{"label":"Repeat","icon":"retry","actionUri":"/finance-repeat","type":"reload"},"reciver_number":{"type":"hidden","receiver_number":{"receiver_number":3981101740298859}},"id":{"type":"hidden","id":{"id":3316}}}},{"type":"\u041f\u043b\u0430\u0442\u0435\u0436","sender_full_name":"baha","sender_number":3981105723188617,"receiver_full_name":"\u0422\u041e\u041e \u0022Bloomzed.kz\u0022","date":"2021.08.11","amount":"1200000.00","status":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d","actions":{"detail":{"label":"Detail","icon":"eye","actionUri":"/get-merchant-finance-out","type":"detail"},"reload":{"label":"Repeat","icon":"retry","actionUri":"/finance-repeat","type":"reload"},"reciver_number":{"type":"hidden","receiver_number":{"receiver_number":3981101740298859}},"id":{"type":"hidden","id":{"id":3315}}}},{"type":"\u041f\u043b\u0430\u0442\u0435\u0436","sender_full_name":"baha","sender_number":3981105723188617,"receiver_full_name":"\u0422\u041e\u041e \u0022Bloomzed.kz\u0022","date":"2021.08.11","amount":"1200000.00","status":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d","actions":{"detail":{"label":"Detail","icon":"eye","actionUri":"/get-merchant-finance-out","type":"detail"},"reload":{"label":"Repeat","icon":"retry","actionUri":"/finance-repeat","type":"reload"},"reciver_number":{"type":"hidden","receiver_number":{"receiver_number":3981101740298859}},"id":{"type":"hidden","id":{"id":3314}}}},{"type":"\u041f\u043b\u0430\u0442\u0435\u0436","sender_full_name":"baha","sender_number":3981105723188617,"receiver_full_name":"\u0422\u041e\u041e \u0022Bloomzed.kz\u0022","date":"2021.08.11","amount":"1200000.00","status":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d","actions":{"detail":{"label":"Detail","icon":"eye","actionUri":"/get-merchant-finance-out","type":"detail"},"reload":{"label":"Repeat","icon":"retry","actionUri":"/finance-repeat","type":"reload"},"reciver_number":{"type":"hidden","receiver_number":{"receiver_number":3981101740298859}},"id":{"type":"hidden","id":{"id":3313}}}},{"type":"\u041f\u043b\u0430\u0442\u0435\u0436","sender_full_name":"baha","sender_number":3981105723188617,"receiver_full_name":"\u0422\u041e\u041e \u0022Bloomzed.kz\u0022","date":"2021.08.11","amount":"1200000.00","status":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d","actions":{"detail":{"label":"Detail","icon":"eye","actionUri":"/get-merchant-finance-out","type":"detail"},"reload":{"label":"Repeat","icon":"retry","actionUri":"/finance-repeat","type":"reload"},"reciver_number":{"type":"hidden","receiver_number":{"receiver_number":3981101740298859}},"id":{"type":"hidden","id":{"id":3312}}}},{"type":"\u041f\u043b\u0430\u0442\u0435\u0436","sender_full_name":"baha","sender_number":3981105723188617,"receiver_full_name":"\u0422\u041e\u041e \u0022Bloomzed.kz\u0022","date":"2021.08.11","amount":"120000.00","status":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d","actions":{"detail":{"label":"Detail","icon":"eye","actionUri":"/get-merchant-finance-out","type":"detail"},"reload":{"label":"Repeat","icon":"retry","actionUri":"/finance-repeat","type":"reload"},"reciver_number":{"type":"hidden","receiver_number":{"receiver_number":3981101740298859}},"id":{"type":"hidden","id":{"id":3311}}}}],"totalPage":5,"currentPage":2,"url":"/get-finance-in","limit":10,"offset":1}]
    }
  },
  mounted(){
    window.addEventListener('keyup', ev => {
        if(ev.keyCode === 27){
            document.querySelector('.close-menu').click()
            console.log('clicked')
        }
    })
  },
  methods: {
    cModal: function(){
        var wrappers = document.querySelectorAll('.header, #footer-bar, .page-content');
        const menuClose = document.querySelectorAll('.close-menu, .menu-hider');
        menuClose.forEach(el => el.addEventListener('click',e =>{
            console.log(e)
            const activeMenu = document.querySelectorAll('.menu-active');
            for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
            for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+0+"px)"}
        }));
    }

  }
}
</script>

<style scoped>

</style>