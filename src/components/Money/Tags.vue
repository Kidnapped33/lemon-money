<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.name" :class="{selected: selectedTagName === tag.name}" @click="toggle(tag)">{{tag.name}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import TagHelper from "@/mixin/TagHelper";
import { mixins } from "vue-class-component";
@Component
export default class Tags extends mixins(TagHelper) {
  //createTag 通过 TagHelper Mixin
  selectedTagName: string = "通用";
  get tagList() {
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit("fetchTags");
  }
  mounted() {
    this.$emit("update:value", this.tagList[0]);
    this.selectedTagName = this.tagList[0].name;
  }
  toggle(tag: Tag) {
    if (tag.name !== this.selectedTagName) {
      this.$emit("update:value", tag);
    }
    this.selectedTagName = tag.name;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: $color-theme;
        color: white;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>