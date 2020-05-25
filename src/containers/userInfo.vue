<template>
  <div class="user-info">
    <div class="user-info">
      <h4 class="user-name">{{user.username}}</h4>
      <h4 class="full-name">{{user.fullname}}</h4>
      <h4 class="role">{{user.role}}</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "userInfo",
  data: () => {
    return {
      user: {
        username: "test",
        fullname: "Test Admin",
        role: "Master"
      }
    };
  }
};
</script>
<style lang="css">
.user-info {
  margin-top: 5px;
  text-align: center;
}
.user-name {
  font-weight: 900;
  font-size: 20px;
  text-transform: uppercase;
}
</style>