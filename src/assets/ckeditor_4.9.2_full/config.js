/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
  // config.width = 500;
  config.height = 300;
  /**
   * 插件语言
   * @type {string}
   */
	config.language = 'zh-cn';
	// config.uiColor = '#AADC6E';
  /**
   * 插件字体
   * @type {string}
   */
  config.font_names = '宋体/宋体;黑体/黑体;仿宋/仿宋_GB2312;楷体/楷体_GB2312;隶书/隶书;幼圆/幼圆;微软雅黑/微软雅黑;宋体/SimSun;'
    + '新宋体/NSimSun;仿宋_GB2312/FangSong_GB2312;楷体_GB2312/KaiTi_GB2312;黑体/SimHei;微软雅黑/Microsoft YaHei;幼圆/YouYuan;华文彩云/STCaiyun;华文行楷/STXingkai;'
    + '方正舒体/FZShuTi;方正姚体/FZYaoti;Arial;Comic Sans MS;Courier New;Georgia;Lucida Sans Unicode;Tahoma;Times New Roman;Trebuchet MS;Verdana;';
  /**
   * 插件默认字体
   * @type {string}
   */
  config.font_defaultLabel = '宋体';

  /**
   * 设置工具栏显示模式
   * @type {string}
   */
  config.toolbar = 'Full';
  /**
   * 工具栏全显示模式
   * @type {[null,null,null,string,null,null,null,null,null,string,null,null,null]}
   */
  config.toolbar_Full = [
    {
      name: 'document', items: [
        'Source', '-', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates'
      ]
    },
    {
      name: 'clipboard', items: [
        'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'
      ]
    },
    {
      name: 'editing', items: [
        'Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt'
      ]
    },
    '/',
    {
      name: 'forms', items: [
        'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'
      ]
    },
    {
      name: 'basicstyles', items: [
        'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'
      ]
    },
    {
      name: 'links', items: [
        'Link', 'Unlink', 'Anchor'
      ]
    },
    {
      name: 'paragraph', items:
        ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv',
          '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'
        ]
    },
    // todo 在这里设定需要的插件 ...
    // ,'Flash','Smiley','Video' Video是用得国产插件
    {
      name: 'insert', items: [
        'Image', 'Html5video', 'Table', 'HorizontalRule', 'Emojione', 'Video', 'Audio', 'Image2','SpecialChar', 'PageBreak', 'Iframe'
      ]
    },
    '/',
    {
      name: 'styles', items: [
        'Styles', 'Format', 'Font', 'FontSize'
      ]
    },
    {
      name: 'colors', items: [
        'TextColor', 'BGColor'
      ]
    },
    {
      name: 'tools', items: [
        'Maximize', 'ShowBlocks', '-'
        // ,'About'
      ]},
  ];
  /**
   * 基础模式插件列表
   * @type {[null]}
   */
  config.toolbar_Basic = [['Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink', '-'
    // , 'About'
  ]];
  /**
   * 工具栏是否可以被收缩
   * @type {boolean}
   */
  config.toolbarCanCollapse = true;
  /**
   * 工具栏默认是否展开
   * @type {boolean}
   */
  config.toolbarStartupExpanded = true;
  /**
   * 取消 “拖拽以改变尺寸”功能 plugins/resize/plugin.js
   * @type {boolean}
   */
  config.resize_enabled =  true;
  /**
   * 取消文章体得html头
   * @type {boolean}
   */
  config.fullPage = false;
  /**
   * 图片展示方式
   * @type {string}
   */
  config.removeDialogTabs = 'image:advanced;image:advanced';
  /**
   * 禁止图片上传完毕后自动填充长宽
   * @type {boolean}
   */
  config.image_prefillDimensions = false;
  /**
   * 图片展示文字
   */
  config.image_previewText = '';

  /**
   * 字符统计插件
   * @type {{showParagraphs: boolean, showWordCount: boolean, showCharCount: boolean, countSpacesAsChars: boolean, countHTML: boolean, maxWordCount: number, maxCharCount: number, filter: *}}
   */
  config.wordcount = {
    // 段落统计
    showParagraphs: true,
    // 词数统计
    showWordCount: true,
    // 字数统计
    showCharCount: true,
    // 将空格计入字符
    countSpacesAsChars: false,
    // 统计html
    countHTML: false,
    // 最大词数 -1代表无上限
    maxWordCount: -1,
    // 最大字数 -1代表无上限
    maxCharCount: -1,
    // 移除关键词统计 类似mediaembed 节点之类，可以设置不统计
    filter: new CKEDITOR.htmlParser.filter({
      elements: {
        div: function (element) {
          if (element.attributes.class == 'mediaembed') {
            return false;
          }
        }
      }
    })
  }
};
