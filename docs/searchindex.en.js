var relearn_searchindex = [
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "My New Hugo Site",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "My New Hugo Site",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Posts",
    "uri": "/posts/index.html"
  },
  {
    "breadcrumb": "My New Hugo Site \u003e \rPosts",
    "content": "本文写于2025年2月22日20点30分。\n一、安装部署 1. 安装VirtualBox 7.1.6 VirtualBox官方网站：下载地址\n截至2025年2月22日，当前版本是VirtualBox 7.1.6，请根据操作系统下载适配版本，然后直接安装（按照默认步骤即可）。\n2. 下载openEuler ISO openEuler22.03-LTS SP4 ISO镜像文件下载：下载地址\n选择下载Offline Standard ISO 3.8G的版本，存储到本地。本人本地存储路径为（C:\\SelfSoftware\\VirtualBox\\openEuler-22.03-LTS-SP4-x86_64-dvd.iso）。\n3. 虚拟机内安装openEuler 安装系统：https://blog.csdn.net/Zhichao_Zhang/article/details/127142410\n更新源：https://www.openeuler.org/zh/blog/2024-10-15-boostYum/2024-10-15-boostYum.html\n二、网络配置 1. 创建虚拟网卡 打开VirtualBox，依次点击工具=\u003e网络=\u003e仅主机(Host-Only)网络=\u003e创建：会创建Host-Only网络，可以提供虚拟机与主机通信的能力。此操作会在windows系统创建一个虚拟网卡VirtualBox Host-Only Ethernet Adapter，按照如下图所示配置IP地址，并且禁用DHCP服务器。配置好以后，点击应用后，就可以在windows系统看到虚拟网卡。 依次点击工具=\u003e网络=\u003eNAT网络=\u003e创建：会创建NAT网络，可以为虚拟机提供访问外部网络的能力。或者直接使用桥接模式 2. openEuler网络配置设置 VirtualBox网卡1选择Host-Only网络 VirtualBox网卡2选择NAT网络或者桥接网卡 登录虚拟机内部，进入cd /etc/sysconfig/network-scripts/目录，然后修改网卡配置文件。 # NAT网络：ifcfg-enp0s8 TYPE=Ethernet PROXY_METHOD=none BROWSER_ONLY=no BOOTPROTO=dhcp DEFROUTE=yes IPV4_FAILURE_FATAL=no IPV6INIT=yes IPV6_AUTOCONF=yes IPV6_DEFROUTE=yes IPV6_FAILURE_FATAL=no NAME=enp0s8 UUID=5767f03c-14fe-4523-9961-cc0192a7e2a5 DEVICE=enp0s8 ONBOOT=yes # Host-Only网络：ifcfg-enp0s3 TYPE=Ethernet PROXY_METHOD=none BROWSER_ONLY=no BOOTPROTO=static DEFROUTE=yes IPV4_FAILURE_FATAL=no IPV6INIT=yes IPV6_AUTOCONF=yes IPV6_DEFROUTE=yes IPV6_FAILURE_FATAL=no NAME=enp0s3 UUID=86111c34-6bba-459e-9a0c-832ea0b0b3c8 DEVICE=enp0s3 ONBOOT=yes IPADDR=192.168.56.17 NETMASK=255.255.255.0\r重启网卡，让网卡配置生效，并且查看IP地址配置是否生效。 ifdown enp0s3 ifdown enp0s8 ifup enp0s3 ifup enp0s8 ip a\r3. Windows查看网络配置 在windows系统下打开cmd命令行，输入ipconfig就可以看到配置的网卡是否存在。 另外，可以在打开设置查看是否配置正确：设置=\u003e网络和Internet=\u003e高级网络设置。 如下图所示，可以看到以太网2也就是我们建立的虚拟网卡，然后点击查看其他属性。 此时，可以看到ipv4地址就是前面设置的IP地址。 4. 验证虚拟机是否与主机互通 能ping通就表示虚拟机与主机可以互通\n三、Xshell登录虚拟机 1. 下载并安装Xshell和XFTP Xshell官方网站：下载地址\n2. SSH建立连接 在Xshell中会话中，执行ssh root@192.168.56.1来建立连接，或者通过会话管理的方式来连接虚拟机。\n可以在这里记录账号和密码，后续可以在会话管理中找到此次连接。\n接下来就能在Xshell中愉快的玩耍openEuler系统。",
    "description": "本文写于2025年2月22日20点30分。\n一、安装部署 1. 安装VirtualBox 7.1.6 VirtualBox官方网站：下载地址\n截至2025年2月22日，当前版本是VirtualBox 7.1.6，请根据操作系统下载适配版本，然后直接安装（按照默认步骤即可）。\n2. 下载openEuler ISO openEuler22.03-LTS SP4 ISO镜像文件下载：下载地址\n选择下载Offline Standard ISO 3.8G的版本，存储到本地。本人本地存储路径为（C:\\SelfSoftware\\VirtualBox\\openEuler-22.03-LTS-SP4-x86_64-dvd.iso）。\n3. 虚拟机内安装openEuler 安装系统：https://blog.csdn.net/Zhichao_Zhang/article/details/127142410\n更新源：https://www.openeuler.org/zh/blog/2024-10-15-boostYum/2024-10-15-boostYum.html\n二、网络配置 1. 创建虚拟网卡 打开VirtualBox，依次点击工具=\u003e网络=\u003e仅主机(Host-Only)网络=\u003e创建：会创建Host-Only网络，可以提供虚拟机与主机通信的能力。此操作会在windows系统创建一个虚拟网卡VirtualBox Host-Only Ethernet Adapter，按照如下图所示配置IP地址，并且禁用DHCP服务器。配置好以后，点击应用后，就可以在windows系统看到虚拟网卡。 依次点击工具=\u003e网络=\u003eNAT网络=\u003e创建：会创建NAT网络，可以为虚拟机提供访问外部网络的能力。或者直接使用桥接模式 2. openEuler网络配置设置 VirtualBox网卡1选择Host-Only网络",
    "tags": [],
    "title": "VirtualBox安装openEuler22.03-LTS SP4教程",
    "uri": "/posts/virtualbox%E5%AE%89%E8%A3%85%E5%92%8C%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B/index.html"
  },
  {
    "breadcrumb": "My New Hugo Site",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "My New Hugo Site",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
