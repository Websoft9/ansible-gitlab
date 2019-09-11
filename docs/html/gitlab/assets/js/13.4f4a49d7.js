(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{205:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"smtp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#smtp","aria-hidden":"true"}},[t._v("#")]),t._v(" SMTP")]),t._v(" "),s("p",[t._v("Sending mail is a common feature for GitLab. After a large number of user practice feedback, only one way is recommended, that is, using the "),s("strong",[t._v("third-party STMP service")]),t._v(" to send the email.")]),t._v(" "),s("blockquote",[s("p",[t._v("Do not try to install "),s("strong",[t._v("Sendmail")]),t._v(" or other Mail server software on your Cloud Server for sending mail, because it is very difficulty in maintenance.")])]),t._v(" "),s("p",[t._v("Follow is the sample using "),s("strong",[t._v("SendGrid's SMTP Service")]),t._v(" to configure sending mail for GitLab:")]),t._v(" "),s("ol",[s("li",[t._v("Log in SendGrid console, prepare your SMTP settings like the follow sample"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("SMTP host: smtp.sendgrid.net\nSMTP port: 25 or 587 for unencrypted/TLS email, 465 for SSL-encrypted email\nSMTP Authentication: must be checked\nSMTP Encryption: must SSL\nSMTP username: websoft9smpt\nSMTP password: #fdfwwBJ8f    \n")])])])]),t._v(" "),s("li",[t._v("Use SSH or SFTP to connect Server, modify the GitLab configuration file: "),s("em",[t._v("/etc/gitlab/gitlab.rb")]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("gitlab_rails['smtp_enable'] = true\ngitlab_rails['smtp_address'] = \"smtp.sendgrid.net\"\ngitlab_rails['smtp_port'] = 587\ngitlab_rails['smtp_user_name'] = \"a_sendgrid_crendential\"\ngitlab_rails['smtp_password'] = \"a_sendgrid_password\"\ngitlab_rails['smtp_domain'] = \"smtp.sendgrid.net\"\ngitlab_rails['smtp_authentication'] = \"login\"\ngitlab_rails['smtp_enable_starttls_auto'] = true\ngitlab_rails['smtp_tls'] = false\n")])])])]),t._v(" "),s("li",[t._v("Restart Service"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("sudo gitlab-ctl reconfigure\n")])])])])]),t._v(" "),s("p",[t._v("GitLab provides configuration methods for dozens of different SMTP service providers, please refer to the official documentation:"),s("a",{attrs:{href:"https://docs.gitlab.com/omnibus/settings/smtp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SMTP settings"),s("OutboundLink")],1)])])},[],!1,null,null,null);e.default=r.exports}}]);