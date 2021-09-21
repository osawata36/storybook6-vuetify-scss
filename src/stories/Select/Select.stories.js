import vuetify from "@/plugins/vuetify";
import DsSelect from "./Select";

export default {
  component: DsSelect,
  title: "Vuetify/Select",
  argTypes: {
    click: { action: "click " },
  },
};

const Template = (args, { argTypes }) => ({
  components: { DsSelect },
  props: Object.keys(argTypes),
  // vuetifyインスタンスを登録する
  vuetify,
  template: '<ds-select v-bind="$props" @click="click" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "登録",
};
