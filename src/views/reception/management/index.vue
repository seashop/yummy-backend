<template>
  <div class="management">
    <!-- 头部 -->
    <div class="table-header">
      <div class="table-header-item">
        <div class="item-right">X</div>
        <div class="item-content">一楼大厅</div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="table-item" v-for="item in 6" :key="item">
        <div class="table-title">
          <span>A001</span>
          <span>X</span>
        </div>
        <div class="table-content">
          <div class="table-status">空闲</div>
          <div>（8人）</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
  .management {
    padding: 10px;
    .table-header {
      display: flex;
      align-items: center;
      height: 100px;
      padding: 10px;
      background: #fff;
      .table-header-item {
        width: 100px;
        height: 70px;
        padding: 5px;
        border-radius: 8px;
        background: #2882ef;

        .item-right {
          text-align: right;
          color: #fff;
        }
        .item-content {
          text-align: center;
          color: #fff;
        }
      }
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      .table-item {
        width: 200px;
        height: 100px;
        padding: 5px;
        margin: 0 5px;
        border-radius: 8px;
        border: 1px solid #ccc;
        background: #fff;
        .table-title {
          display: flex;
          justify-content: space-between;
        }
        .table-content {
          text-align: center;
        }
      }
    }
  }
</style>
