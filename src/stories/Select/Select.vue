<template>
  <v-select
    v-model="selections"
    :hint="`${selections.name} / 製品コード: ${selections.code}`"
    :items="items"
    item-text="name"
    item-value="code"
    label="選択してください"
    persistent-hint
    return-object
    outlined
  ></v-select>
</template>
<script>
export default {
  name: "DsSelect",
  data() {
    return {
      selections: {},
      items: [
        { name: "炊飯器", code: "ABC001" },
        { name: "冷蔵庫", code: "CCG999" },
        { name: "電子レンジ", code: "DDD872" },
        { name: "エアコン", code: "QEQ183" },
        { name: "ホームベーカリー", code: "ZZZZZZ" },
      ],
    };
  },
};
</script>
