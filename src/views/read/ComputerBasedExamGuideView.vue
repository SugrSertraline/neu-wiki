<template>
    <Description>
        无论你在哪个学院，只要你有高等数学、线性代数、概率论、复变函数这几门课之一，你就需要进行上机考试。作为课程分数的重要组成成分之一，特此为机考写下指南，以便新生能快速掌握流程及各种情况的应对。
    </Description>
    <Description>

        <n-a href="http://www.neumathe.cn/">http://www.neumathe.cn</n-a>
        为非官方刷题网站，请合理使用 。
    </Description>
    <Description>
        大学生医保即学校能够承担一部分医疗的费用，但大部分同学不了解具体的流程或根本不知道医保的存在，导致学习阶段没有享受到应有的权利，这里给大家提供关于浑南、南湖校区就诊的建议以及医保的基础信息。
    </Description>
    <Section id="title1" title="一、考试流程">
        <Description>
            新生第一次考试需要录入身份证信息，所以请<strong>
                **务必**
            </strong>携带身份证，如果忘记携带，可以找考场助理说明情况，让其手动录入。
        </Description>
        <Description>
            新生第一次考试需要自己录入虹膜信息，需要打开虹膜录制界面录制虹膜，届时会有考场助理进行指导，每次考试也都需要验证虹膜。
        </Description>
        <Description>
            浑南校区的考试地点为1号楼B509,考试前注意携带鞋套、学生证、身份证。看清楚预约的考试的时间以及座位，提前10分钟到达。
        </Description>
        <Description>
            由于机房电脑老旧，第一次开机非常慢，请耐心等待，开机后需要加载虹膜设备，点击IE浏览器无反应为正常现象，请耐心等待。
        </Description>
        <Description>
            机房仅可访问内网，所以需要手动输入考试网址，只能使用IE浏览器，输入 mathe.neu.edu.cn 回车键进入考试网址。选择对应的考试科目登陆考试系统，参加考试。
        </Description>
        <Description>
            部分电脑由于设备原因，无法自动加载虹膜插件，需要手动允许。当打开虹膜验证界面时页面下方会有弹窗提示（可能会被记住密码的提示盖住，先关掉它），请点击允许后重新验证。
        </Description>
        <Description>
            考试结束后需在前方签到本签到。
        </Description>
        <n-alert title="期中考试" type="warning">
            部分课程会有机考期中考试，所占总分比例较大，需要做好准备。
            
            期中考试考试流程与平时考试基本一致，只是不需要签到，只需要在考场记录单签字。
    </n-alert>
    </Section>

    <Section id="title2" title="二、注意事项">
        <Description>
            带鞋套（如果不嫌弃的话可以去垃圾桶翻一下，有很多）、学生证（用于出现突发状况验证身份），草稿纸上不要有任何字迹。
        </Description>
        <Description>
            如果出现突发状况，无法按时参加考试，请在预约人数较少的场次前往考场和助理说明情况，安排备用座。如果考场预约满了，需要等别人考试结束后你才能使用。
        </Description>
        <Description>
            每场考试时间固定，请尽量不要迟到，时间结束必须提交试卷（即使你试卷的时间还没结束），所以期中考试请不要迟到，严格一个半小时，迟到一分钟少答一分钟。
        </Description>
        <Description>
            考场全范围监控覆盖，如果出现作弊现象，该场考试零分。
        </Description>
        <Description>
            由于设备老旧，可能会出现分辨率过大，需要手动调节，在桌面右键调整分辨率，将分辨率调高会好很多。考卷如出现过大过小，请按下Ctrl键+鼠标滚轮缩放界面。
        </Description>
        <Description>
            <strong>**千万注意考试科目**</strong>，如果你在考高数的时候打开了线代考试，你必须答完，一旦进入考试就会开始计时，即使你退出界面，时间到自动提交试卷，所以注意不要选错考试科目。
        </Description>
        <Description>
            如果你很“幸运”的碰到了错题，比如选项重复、题目不全、选项错误等，恭喜你，期末的时候任课老师会统计这些情况并将分数加回来，你只需要随便选一个然后离场时找监考助理签一下错题记录单（非必要）。
        </Description>
        <Description>
            考试过程中如出现问题，请联系考场助理解决。
        </Description>
    </Section>


</template>
<script setup lang="ts">
import { Description } from '@/components/Description';
import { Section } from '@/components/Section';
</script>