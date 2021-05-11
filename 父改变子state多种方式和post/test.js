var scoring = {
    template:
    '<table class="table-qccr table table-striped">\
        <tr>\
            <th width="50%">调性要求1{{p1}}</th>\
            <th width="50%">分数</th>\
        </tr>\
        <tr v-for="(item, index) in templists" class="test">\
            <td><span class="test">{{item.titleLabel}}</span></td>\
            <td class="channels" >\
                <select style="width:130px;margin:-3px 0 0 0;" v-model="listvalues[item.name]">\
                    <option v-for="(optioninfo, index) in item.seleOpts" :value="optioninfo.value">{{optioninfo.label}}</option>\
                </select>\
            </td>\
        </tr>\
    </table>',
    props:{
        p1: { },
        initlistvalue: { },
    },
    data: function(){
        return {
            templists: [],
            listvalues:{},
        }
    },
    mounted:function() {
        this.getTemplists();
        console.log(this.p1)
    },
    watch: {
        initlistvalue :function(val) {
            this.listvalues = val;
        }
    },

    methods: {
        getTemplists :function() {
            setTimeout(() => {
                this.templists = [
                    {titleLabel:'连锁门店',name:'mendian', seleOpts:[
                        {
                            value:1,
                            label:'mendian'
                        },
                        {
                            value:2,
                            label:'mendian11'
                        },
                    ]},
                    {titleLabel:'门头形象',name:'xingxiang', seleOpts:[
                        {
                            value:11,
                            label:'xingxiang11'
                        },
                        {
                            value:22,
                            label:'xingxiang22'
                        },
                    ]},
                    {titleLabel:'客休区',name:'quyu', seleOpts:[
                        {
                            value:111,
                            label:'quyu1'
                        },
                        {
                            value:2222,
                            label:'quyu2'
                        },
                    ]}
                ]
            }, 500);
        },
        setvalue:function(val){
            this.listvalues = val;
        }
    }

}