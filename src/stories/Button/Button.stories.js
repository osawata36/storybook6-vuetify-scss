import vuetify from "@/plugins/vuetify";
import DsButton from "./Button";

export default {
  component: DsButton,
  title: "Vuetify/Button",
  argTypes: {
    click: { action: "click " },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { DsButton },
  props: Object.keys(argTypes),
  // vuetifyインスタンスを登録する
  vuetify,
  template: '<ds-button v-bind="$props" @click="click" />',
});

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  label: "Primary",
};

export const Warning = Template.bind({});
Warning.args = {
  label: "警告カラー",
  color: "warning",
};
export const Error = Template.bind({});
Error.args = {
  label: "エラーカラー",
  color: "error",
};

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "large size",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "small size",
// };
