/*
  @dest: 使用配置文件
  @Author: yangli
 */
module.exports  = {
  npmUrl: 'https://registry.npmjs.org/yang-ccccit-cli/latest',
  promptTypeList:[{
      type: 'list',
      message: '请选择拉取的模版类型:',
      name: 'type',
      choices: [{
        name: 'mobile',
        value: {
          url: 'https://github.com/yangzyl/we_ccccit_wechart.git',
          gitName: 'we_ccccit_wechart',
          val:'移动端模版'
        }
      },{
        name: 'pc',
        value: {
          url: 'https://github.com/yangzyl/vue-cli-template.git',
          gitName: 'vue-cli-template',
          val:'PC端模版'
        }
      }]
  }],
};
