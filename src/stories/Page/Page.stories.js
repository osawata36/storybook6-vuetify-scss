import MyPage from "./Page";
// import * as HeaderStories from "./Header.stories";

export default {
  title: "Vuetify/Page",
  component: MyPage,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyPage },
  template:
    '<my-page :user="user" @onLogin="onLogin" @onLogout="onLogout" @onCreateAccount="onCreateAccount" />',
});

export const Default = Template.bind({});
// LoggedIn.args = {
//   ...HeaderStories.LoggedIn.args,
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   ...HeaderStories.LoggedOut.args,
// };
