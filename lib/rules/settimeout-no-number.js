/**
 * @fileoverview setTimeout 第二个参数禁止是数字
 * @author grantguo
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "setTimeout 第二个参数禁止是数字",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: "code", // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    return {
      // visitor functions for different types of nodes
      Identifier: (node) => {
        //console.log(node)
      },
      'CallExpression': (node) => {
        if (node.callee.name !== 'setTimeout') return // 不是定时器即过滤
        const timeNode = node.arguments && node.arguments[1] // 获取第二个参数
        if (!timeNode) return // 没有第二个参数
        // 检测报错第二个参数是数字 报错
        if (timeNode.type === 'Literal' && typeof timeNode.value === 'number') {
            context.report({
                node,
                message: 'setTimeout第二个参数禁止是数字',
                fix: function(fixer){
                  const numberValue = timeNode.value;
                  const statementString = `const countNumber1 = ${numberValue}\n`
                  return [
                    // 修改数字为变量 变量名故意写错 为了让用户去修改它
                    fixer.replaceTextRange(node.arguments[1].range, 'countNumber2'),
                    // 在setTimeout之前增加一行声明变量的代码 用户自行修改变量名
                    fixer.insertTextBeforeRange(node.range, statementString)
                  ];
                }
            })
        }
      },
      'VariableDeclaration': (node) => {
        if(node.kind === 'let') {
          console.error('not support let declare')
          context.report({
            node,
            message: 'not support let declare'
          })
        }
      }
    };
  },
};
