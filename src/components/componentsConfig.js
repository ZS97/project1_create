export const basicComponents = [
    // {
    //     inline: false,
    //     defaultValue: "",
    //     type: "input",
    //     name: "单行文本",
    //     icon: "icon-input",
    //     options: {
    //         showLabel: false,
    //         options: [
    //             {
    //                 value: "选项1",
    //                 label: "选项1"
    //             },
    //             {
    //                 value: "选项2",
    //                 label: "选项2"
    //             },
    //             {
    //                 value: "选项3",
    //                 label: "选项3"
    //             }
    //         ],
    //         props: {
    //             value: "value",
    //             label: "label"
    //         },
    //         width: "100%",
    //         defaultValue: "",
    //         required: false,
    //         dataType: "string",
    //         pattern: "",
    //         placeholder: "",
    //         disabled: false,
    //         score: "",
    //         remote: false,
    //         remoteOptions: [],
    //         remoteFunc: ""
    //     }
    // },
    {
        type: "input",
        name: "填空题",
        icon: "icon-input",
        editorTinymceHtml: "", //高级选项按钮内输入的内容
        score: "",
        analysis: "",
        showStatus: true,
        options: {
            inline: false,
            defaultValue: "", //默认选中
            showLabel: false,
            options: [
                {
                    value: "填空题1",
                    label: "选项1",
                    score: '',
                    // selectArray:{
                    //     value: "填空题1",
                    //     label: "选项1",
                    // },
                    rightedValue: "" //正确答案
                },
                {
                    value: "填空题2",
                    label: "选项2",
                    rightedValue: "",
                    score: '',
                },
                {
                    value: "填空题3",
                    label: "选项3",
                    rightedValue: "",
                    score: '',
                }
            ],
            required: true,
            width: "",
            remote: false,
            remoteOptions: [],
            props: {
                value: "value",
                label: "label"
            },
            remoteFunc: "",
            disabled: false
        }
    },
    // {
    //   type: 'textarea',
    //   name: '多行文本',
    //   icon: 'icon-diy-com-textarea',
    //   options: {
    //     width: '100%',
    //     defaultValue: '',
    //     required: false,
    //     disabled: false,
    //     pattern: '',
    //     placeholder: ''
    //   }
    // },
    // {
    //   type: 'number',
    //   name: '计数器',
    //   icon: 'icon-number',
    //   options: {
    //     width: '',
    //     required: false,
    //     defaultValue: 0,
    //     min: '',
    //     max: '',
    //     step: 1,
    //     disabled: false,
    //     controlsPosition: ''
    //   }
    // },
    {
        type: "radio",
        name: "单选框组",
        icon: "icon-radio-active",
        editorTinymceHtml: "", //高级选项按钮内输入的内容
        score: "",
        analysis: "",
        showStatus: true,
        // topicLogic: [
        //     //     {
        //     //     topicModel:'',//选中跳转到哪个题目
        //     //     itemModel:'',//每个选项
        //     // }
        // ],//选中的选项
        options: {
            inline: false,
            defaultValue: [],
            showLabel: false,
            options: [
                {
                    value: "选项1",
                    label: "选项1",
                    rightedValue: false,
                    isExt_content: false,
                    extContent: '',
                    itemType: 1,
                    score: '',
                    extRightValue:'',
                },
                {
                    value: "选项2",
                    label: "选项2",
                    rightedValue: false,
                    isExt_content: false,
                    extContent: '',
                    itemType: 1,
                    score: '',
                    extRightValue:'',
                },
                {
                    value: "选项3",
                    label: "选项3",
                    rightedValue: false,
                    isExt_content: false,
                    extContent: '',
                    itemType: 1,
                    score: '',
                    extRightValue:'',
                }
            ],
            required: true,
            width: "",
            remote: false,
            remoteOptions: [],
            props: {
                value: "value",
                label: "label"
            },
            remoteFunc: "",
            disabled: false
        }
    },
    {
        type: "checkbox",
        name: "多选框组",
        icon: "icon-check-box",
        editorTinymceHtml: "", //高级选项按钮内输入的内容
        score: "",
        analysis: "", //问题解题思路
        showStatus: true,
        topicLogic: [
            //     {
            //     topicModel:'',//选中跳转到哪个题目
            //     itemModel:'',//每个选项
            // }
        ],//选中的选项
        options: {
            inline: false,
            defaultValue: [],
            showLabel: false,
            options: [
                {
                    value: "选项1",
                    righted: false,
                    rightedValue: "", //正确答案
                    isExt_content: false,
                    extContent: '',
                    itemType: 1,
                    score: '',
                    extRightValue:'',
                },
                {
                    value: "选项2",
                    righted: false,
                    rightedValue: "", //正确答案
                    isExt_content: false,
                    extContent: '',
                    itemType: 1,
                    score: '',
                    extRightValue:'',
                },
                {
                    value: "选项3",
                    righted: false,
                    rightedValue: "", //正确答案
                    isExt_content: false,
                    extContent: '',
                    itemType: 1,
                    score: '',
                    extRightValue:'',
                }
            ],

            required: true,
            width: "",
            remote: false,
            remoteOptions: [],
            props: {
                value: "value",
                label: "label"
            },
            remoteFunc: "",
            disabled: false
        }
    },
    // {
    //   type: 'time',
    //   name: '时间选择器',
    //   icon: 'icon-time',
    //   options: {
    //     defaultValue: '21:19:56',
    //     readonly: false,
    //     disabled: false,
    //     editable: true,
    //     clearable: true,
    //     placeholder: '',
    //     startPlaceholder: '',
    //     endPlaceholder: '',
    //     isRange: false,
    //     arrowControl: true,
    //     format: 'HH:mm:ss',
    //     required: false,
    //     width: '',
    //   }
    // },
    // {
    //   type: 'date',
    //   name: '日期选择器',
    //   icon: 'icon-date',
    //   options: {
    //     defaultValue: '',
    //     readonly: false,
    //     disabled: false,
    //     editable: true,
    //     clearable: true,
    //     placeholder: '',
    //     startPlaceholder: '',
    //     endPlaceholder: '',
    //     type: 'date',
    //     format: 'yyyy-MM-dd',
    //     timestamp: false,
    //     required: false,
    //     width: '',
    //   }
    // },
    // {
    //   type: 'rate',
    //   name: '评分',
    //   icon: 'icon-icon-test',
    //   options: {
    //     defaultValue: null,
    //     max: 5,
    //     disabled: false,
    //     allowHalf: false,
    //     required: false
    //   }
    // },
    // {
    //   type: 'color',
    //   name: '颜色选择器',
    //   icon: 'icon-color',
    //   options: {
    //     defaultValue: '',
    //     disabled: false,
    //     showAlpha: false,
    //     required: false
    //   }
    // },
    {
        type: 'select',
        name: '下拉选择框',
        icon: 'icon-select',
        //   editorTinymceHtml: "", //高级选项按钮内输入的内容
        score: "",
        analysis: "", //问题解题思路
        showStatus: true,
        options: {
            optionsDefaultValue:'',
            defaultValue: '',
            options1DefaultValue: '',
            multiple: false,
            disabled: false,
            clearable: false,
            placeholder: '',
            required: true,
            showLabel: false,
            width: '',
            options: [
                {
                    value: '下拉框1',
                    isExt_content: false,
                    extContent: '',
                    itemType: 1,
                    score: '',
                    righted:false,
                },
                {
                    value: '下拉框2',
                    isExt_content: false,
                    extContent: '',
                    itemType: 1,
                    score: '',
                    righted:false,
                }, {
                    value: '下拉框3',
                    isExt_content: false,
                    extContent: '',
                    itemType: 1,
                    score: '',
                    righted:false,
                }
            ],
            options1: [
                {
                    value: '下拉框1',
                    isExt_content: false,
                    extContent: '',
                    itemType: 1,
                    score: '',
                    righted:false,
                },
                {
                    value: '下拉框2',
                    isExt_content: false,
                    extContent: '',
                    itemType: 1,
                    score: '',
                    righted:false,
                }, {
                    value: '下拉框3',
                    isExt_content: false,
                    extContent: '',
                    itemType: 1,
                    score: '',
                    righted:false,
                }
            ],
            remote: false,
            filterable: false,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label'
            },
            remoteFunc: ''
        }
    },
    // {
    //   type: 'switch',
    //   name: '开关',
    //   icon: 'icon-switch',
    //   options: {
    //     defaultValue: false,
    //     required: false,
    //     disabled: false,
    //   }
    // },
    // {
    //   type: 'slider',
    //   name: '滑块',
    //   icon: 'icon-slider',
    //   options: {
    //     defaultValue: 0,
    //     disabled: false,
    //     required: false,
    //     min: 0,
    //     max: 100,
    //     step: 1,
    //     showInput: false,
    //     range: false,
    //     width: ''
    //   }
    // }
];