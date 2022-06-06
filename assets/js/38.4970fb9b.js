(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{489:function(s,a,t){"use strict";t.r(a);var e=t(59),l=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")]),s._v(" Git")]),s._v(" "),t("ol",[t("li",[s._v("配置用户签名（首次需要设置，否则提交时报错）")]),s._v(" "),t("li",[s._v("初始化本地库")])]),s._v(" "),t("h2",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[s._v("#")]),s._v(" 命令")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("初始化本地库(会在当前目录生成"),t("code",[s._v(".git")]),s._v("的文件夹)")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init \n")])])])]),s._v(" "),t("li",[t("p",[s._v("连接远程仓库")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin xxxxx//x为remoteRepo的SSH或者https\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone xxxxx//克隆会直接连接\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v//查看远程仓库地址\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看状态")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])])])]),s._v(" "),t("li",[t("p",[s._v("将文件加入追踪/删除追踪")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" filename //单个文件\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" //所有文件\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" --cached filename //去除对文件的追踪\n")])])])]),s._v(" "),t("li",[t("p",[s._v("提交本地库")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"desription of this version."')]),s._v(" //"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("中是对这次提交的版本的描述\n//git会输出 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("main xxxxxxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" //xx为版本号前七位\n")])])])]),s._v(" "),t("li",[t("p",[s._v("查看版本信息")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog //版本号为前七位 \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log  //详细信息\n")])])])]),s._v(" "),t("li",[t("p",[s._v("版本设置（会修改本地文件）")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard xxxxxxx //--hard 强制回退到xxxxxx版本\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[s._v("#")]),s._v(" 分支")]),s._v(" "),t("blockquote",[t("p",[s._v("可以并行开发多个功能，提高开发效率。")]),s._v(" "),t("p",[s._v("开发失败不会互相影响")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("查看分支")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -v \n")])])])]),s._v(" "),t("li",[t("p",[s._v("创建分支")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch name\n")])])])]),s._v(" "),t("li",[t("p",[s._v("切换分支")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout name\n")])])])]),s._v(" "),t("li",[t("p",[s._v("合并分支")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge name //将name分支合并到当前分支\n")])])])]),s._v(" "),t("li",[t("p",[s._v("删除分支")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D localBranchName\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"分支冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支冲突"}},[s._v("#")]),s._v(" 分支冲突")]),s._v(" "),t("blockquote",[t("p",[s._v("原因：被合并的分支与当前分支在同一文件的同一位置有不同修改)")])]),s._v(" "),t("p",[t("strong",[s._v("解决步骤")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("手动操作文件，解决冲突。\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" conflictFile //将冲突文件加入追踪\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version description"')]),s._v(" //最后不加文件名，直接默认commit到当前分支。\n")])])]),t("p",[s._v("被合并的分支中冲突文件保持原状态。")]),s._v(" "),t("h2",{attrs:{id:"协作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协作"}},[s._v("#")]),s._v(" 协作")]),s._v(" "),t("h3",{attrs:{id:"团队协作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#团队协作"}},[s._v("#")]),s._v(" 团队协作")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("初始化项目库")])]),s._v(" "),t("li",[t("p",[s._v("将自己的分支交到代码托管平台如"),t("code",[s._v("github")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n")])])])]),s._v(" "),t("li",[t("p",[s._v("将远程库克隆\\拉取到本地")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone //\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n")])])])])]),s._v(" "),t("h3",{attrs:{id:"友情协作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#友情协作"}},[s._v("#")]),s._v(" 友情协作")]),s._v(" "),t("ol",[t("li",[s._v("协助者"),t("code",[s._v("fork")]),s._v("项目到自己远程库。")]),s._v(" "),t("li",[s._v("协助者将远程库"),t("code",[s._v("clone")]),s._v("到本地")]),s._v(" "),t("li",[s._v("协助者进行本地修改后，"),t("code",[s._v("commit")]),s._v("本地分支，再"),t("code",[s._v("push")]),s._v("到自己远程库，提交"),t("code",[s._v("pull request")]),s._v("请求。经团队管理员审核后"),t("code",[s._v("merge")]),s._v("成功。")])]),s._v(" "),t("h2",{attrs:{id:"远程和本地交互"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程和本地交互"}},[s._v("#")]),s._v(" 远程和本地交互")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("本地远程连接")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin xxxxx//x为remoteRepo的SSH或者https\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone xxxxx//克隆会直接连接\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v//查看远程仓库地址\n")])])])]),s._v(" "),t("li",[t("p",[s._v("给"),t("code",[s._v("remote repo")]),s._v("创建别名 、查看别名")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" alaisName xxxx //xxx为项目地址\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v //查看别名\n")])])])]),s._v(" "),t("li",[t("p",[s._v("将本地当前分支"),t("code",[s._v("push")]),s._v("到"),t("code",[s._v("remote repo")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin/address remoteBranch //origin是当前git对应github的项目\n")])])])]),s._v(" "),t("li",[t("p",[s._v("将远程分支"),t("code",[s._v("pull")]),s._v("到当前分支")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin/address remoteBranch // origin是当前git对应github的项目\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"git插件集成到软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git插件集成到软件"}},[s._v("#")]),s._v(" GIT插件集成到软件")])])}),[],!1,null,null,null);a.default=l.exports}}]);