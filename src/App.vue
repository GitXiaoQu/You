<!-- src="https://替换成你的头像链接"  换成你的照片链接（比如微信/抖音保存的图片链接） -->
<template> 
<!--  类似于body  -->
  <!-- 整个页面容器，适配手机 -->
  <div class="intro-container">
    <!-- 头像区域 -->
    <div class="avatar-wrapper">
      <img 
        class="avatar" 
        src = ""
        alt="我的头像"
      >
    </div>

    <!-- 基本信息 -->
    <div class="info-card">
      <h1 class="name">屈可伸</h1>  <!-- 替换成你的名字 -->
      <p class="basic">23岁 · 陕西人 但是发展在南方浙江杭州可能性大 · 专业:计算机 </p>  <!-- 替换成你的信息 -->
      <div class="divider"></div>

      <!-- 兴趣爱好 -->
      <div class="hobby">
        <h3>✨ 业余时间会做什么/爱好 </h3>
        <div class="hobby-list">
          <span>其实也喜欢看英文剧的</span>
          <span>喜欢旅行,爬山(但是爬的少,也是没人一起去爬,家里学校都没人想去)</span>
          <span>会追一些动漫(比如:........(有点多))</span>
          <span>打王者荣耀(后面玩的挺少了),玩三角洲(玩的也少)(闲的话会看主播玩)</span>  <!-- 替换成你的爱好 -->
        </div>
      </div>

      <!-- 一句话介绍 -->
      <div class="motto">
        <p>很高兴认识你～,不过我还不知道你的名字呢, 你可能觉得我有些冒失啥的,慢慢来，我平时不会打扰你的 😊</p>
      </div>
    </div>
  </div>
</template>



<!-- vue逻辑 -->
<script setup>
// 这里不用写复杂逻辑，纯展示页面
</script>


<!-- scoped 表示只作用于当前组件 -->
<style scoped>
/* 全局样式，适配手机 */
.intro-container {
  min-height: 100vh;
  background: #f8f9fa;
  padding: 20px;
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 头像样式 */
.avatar-wrapper {
  margin-top: 40px;
  margin-bottom: 20px;
}
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* 信息卡片 */
.info-card {
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 350px;
  text-align: center;
}

/* 名字 */
.name {
  font-size: 24px;
  color: #333;
  margin: 0 0 8px 0;
}

/* 基本信息 */
.basic {
  color: #666;
  font-size: 15px;
  margin: 0 0 20px 0;
}

/* 分割线 */
.divider {
  height: 1px;
  background: #eee;
  margin: 20px 0;
}

/* 兴趣爱好 */
.hobby h3 {
  color: #333;
  font-size: 18px;
  margin-bottom: 15px;
}
.hobby-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.hobby-list span {
  background: #f0f8ff;
  color: #4299e1;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
}

/* 一句话介绍 */
.motto {
  margin-top: 25px;
}
.motto p {
  color: #777;
  font-size: 15px;
  line-height: 1.6;
}
</style>