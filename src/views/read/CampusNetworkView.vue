<template>
    <Section id="title1" title="一、基本情况">
        <Description>
            本页内容基于学校信网办<n-a href="http://xwb.neu.edu.cn/2019/0909/c6133a141936/page.htm">信息化与网络服务指南</n-a>、<n-a
                href="http://ipgw.neu.edu.cn/">IP控制网关</n-a>和自身经验完成。
            东北大学为中国教育和科研计算机网（CERNET）东北地区骨干节点，网络条件相对来说还是很不错的。学校的公网出口服务由中国移动提供，游戏加速器可以参考设置。
        </Description>

    </Section>
    <Section id="title2" title="二、连接方式">
      <n-h2>有线连接</n-h2>
      <Description>
        在宿舍、实验室等地可以直接使用网线连接墙上的网络接口连接网络。学校网络为1000M网络，在选择网线时可以尽量选择超五类以上的线缆以充分发挥网络性能。
      </Description>  
    <n-h2>
        无线连接
    </n-h2>
    <Description>
        在校园内任何地方都可以使用支持的设备连接Wlan无线网络使用校园网。学校提供的Wlan网络有“NEU”“NEU-2.4G”和“NEU-Mobile”，均为WiFi6标准，可以根据需求选择连接。 “NEU”为2.4G/5G双频信号，无密码，可以直接连接使用。访问校外资源（即使为免流资源）需要登录IP控制网关。 “NEU-2.4G”为2.4G单频信号，无密码，可以直接连接使用。访问校外资源（即使为免流资源）需要登录IP控制网关。 “NEU-Mobile”为2.4G/5G双频信号，首次连接需要输入学号和校园网密码，第二次直接连接可以直接使用，全程不需要登录IP控制网关。
    </Description>
    <n-alert title="提示" type="info">
        对于想用智能家居的同学，智能家居产品（包括学校新装的空调）只能接入家里那种只要密码的网络，无法接入学校校园网（无密码或者同时需要用户名和密码），需要自备无线网卡给智能家居设备配网。

    </n-alert>
    <Description>
        在运营商网络或在学校外需要访问校园网内资源时，可以使用VPN连接。对于常用网址，可以直接使用浏览器登录<n-a   href="https://webvpn.neu.edu.cn/">WebVPN</n-a>连接；对于WebVPN中没有收录的网站，可以安装OpenVPN等软件进行连接，具体请看信网办<n-a href="http://xwb.neu.edu.cn/2023/0716/c6133a233647/page.htm">OpenVPN使用手册</n-a>
    </Description>
</Section>
<Section id="title3" title="三、收费标准">
<Description>
    校园网为按流量计费网络，对于校园内网站（如学校官网、学院网站、教务系统等）、全网IPv6上传下载和校园外IPv4上传免流，对于校园外IPv4下载按流量分段计费，按自然月结算，规则为：
</Description>
<Description>
    总量0～10G，免费；
</Description>
<Description>

总量10～25G，超出10G的部分1元/G；
</Description>
<Description>
总量25～40G，15元/月；
</Description>
<Description>
总量40～45G，超出40G的部分15元基础上额外收取流量费用1元/G；
</Description><Description>
总量45～80G，20元/月；
</Description>
<Description>
总量80G以上，超出80G部分20元基础上额外收取流量费用1元/G。
</Description>
</Section>
<Section id="title4" title="四、进阶使用">
    <n-h2>在线电视</n-h2>
    <Description>
        校园网环境下可以在线观看有线电视节目直播，直播网站<n-a href="https://hdtv.neu6.edu.cn/">HDTV</n-a>，观看免流量。

    </Description>
    <n-h2>
       PT下载
    </n-h2>
    <Description>
        PT下载是BT下载的特例，为特定用户才可使用的私有BT下载。CERNET上有很多学校或学生运营的PT服务器，一般限制高校用户才能注册使用，里面资源较公网BT站点更丰富且支持免流下载。常用的PT站点有东北大学<n-a href="http://bt.neu6.edu.cn/">六维空间</n-a>、天津大学<n-a href="https://www.tjupt.org/">北洋园PT</n-a>、西安交通大学<n-a href="https://ipv6.njtech.edu.cn/links.html">南洋</n-a>等，可以凭学校邮箱直接注册使用。使用PT需要遵守站点考核规定，尽量满足上传量/做种时间要求，避免账号停用。
    </Description>
    <n-h2>
        一些免流方法
    </n-h2>
    <Description>
        由于特殊原因，此处仅作技术交流和启发，具体实现请自己动手。
    </Description>
    <Description>
        设置程序下载节点为支持IPv6的节点

    </Description>
    <Description>
        使用IPv6服务器转发

    </Description>
    <Description>
        伪装DNS服务器，使用53端口转发

    </Description>
</Section>

</template>
<script setup lang="ts">
import { Description } from '@/components/Description';
import { Section } from '@/components/Section';

</script>