/**
 * @fileoverview 自定义ESlint rule
 * @author grantguo
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + "/rules");

const output = {
  rules: requireIndex(__dirname + '/rules'), // 导出所有规则
  configs: {
    // 导出自定义规则 在项目中直接引用
    grantRule: {
      plugins: ['grantlint'], // 引入插件
      rules: {
        // 开启规则
        'grantlint/settimeout-no-number': 'error'
      }
    }
  }
};

module.exports = output;
