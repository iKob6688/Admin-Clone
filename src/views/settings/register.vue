<template>
  <CCard>
    <CCardHeader class="bg-success text-white">
      <h5>Set up a membership system</h5>
    </CCardHeader>
    <CCardBody>
      <!-- <CInput label="Add more ways" description="Please enter Plan to add" custom>
        <template #append>
          <CButton color="primary" @click="add">Add</CButton>
        </template>
      </CInput>-->
      <div>
        <label class="typo__label">Select more ways</label>
        <multiselect
          v-model="value"
          :options="options"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
          placeholder="Pick some"
          label="name"
          track-by="name"
          :preselect-first="true"
        >
          <template slot="selection" slot-scope="{ values, search, isOpen }">
            <span
              class="multiselect__single"
              v-if="values.length &amp;&amp; !isOpen"
            >{{ values.length }} options selected</span>
          </template>
        </multiselect>
      </div>
    </CCardBody>
  </CCard>
</template>
<script>
import Multiselect from "vue-multiselect";
export default {
  name: "MembershipPlan",
  components: { Multiselect },
  data() {
    return {
      value: [],
      options: [
        { name: "Facebook", key: "JavaScript" },
        { name: "Linkedin", key: "JavaScript" },
        { name: "Youtube", key: "Ruby" },
        { name: "Twitter", key: "Ruby" },
        { name: "VK", key: "PHP" },
        { name: "Freelancer", key: "Elixir" }
      ]
    };
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>