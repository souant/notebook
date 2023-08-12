# compiler编译器

## 编译步骤

- 首先执行parse方法，生成AST
- 再优化AST，标记静态节点，标记静态根节点
- 最后遍历AST，生成JS可执行代码，vue实例的render()函数

```js
export const createCompiler = createCompilerCreator(function baseCompile (
  template: string,
  options: CompilerOptions
): CompiledResult {
  /**
   * 渲染模板字符串template
   * 执行parse方法，使用正则匹配的方式
   * 得到ast抽象语法树
   */
  const ast = parse(template.trim(), options)
  /**
   * 优化ast
   * 标记静态节点
   * 标记静态根节点
   */
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  /**
   * 生成可执行渲染函数代码
   */
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
})
```

## AST抽象语法树

抽象语法树 (Abstract Syntax Tree，AST)，是源代码语法结构的一种抽象表示。以树状的形式表现编程语言的语法结构，每个节点都表示源代码中的一种结构。

## ASTElement

```ts
export interface ASTElement {
  type: 1;
  tag: string;
  attrsList: { name: string; value: any }[];
  attrsMap: Record<string, any>;
  parent: ASTElement | undefined;
  children: ASTNode[];

  processed?: true;

  static?: boolean;
  staticRoot?: boolean;
  staticInFor?: boolean;
  staticProcessed?: boolean;
  hasBindings?: boolean;

  text?: string;
  attrs?: { name: string; value: any }[];
  props?: { name: string; value: string }[];
  plain?: boolean;
  pre?: true;
  ns?: string;

  component?: string;
  inlineTemplate?: true;
  transitionMode?: string | null;
  slotName?: string;
  slotTarget?: string;
  slotScope?: string;
  scopedSlots?: Record<string, ASTElement>;

  ref?: string;
  refInFor?: boolean;

  if?: string;
  ifProcessed?: boolean;
  elseif?: string;
  else?: true;
  ifConditions?: ASTIfCondition[];

  for?: string;
  forProcessed?: boolean;
  key?: string;
  alias?: string;
  iterator1?: string;
  iterator2?: string;

  staticClass?: string;
  classBinding?: string;
  staticStyle?: string;
  styleBinding?: string;
  events?: ASTElementHandlers;
  nativeEvents?: ASTElementHandlers;

  transition?: string | true;
  transitionOnAppear?: boolean;

  model?: {
    value: string;
    callback: string;
    expression: string;
  };

  directives?: ASTDirective[];

  forbidden?: true;
  once?: true;
  onceProcessed?: boolean;
  wrapData?: (code: string) => string;
  wrapListeners?: (code: string) => string;

  // 2.4 ssr optimization
  ssrOptimizability?: SSROptimizability;

  // weex specific
  appendAsTree?: boolean;
}

```