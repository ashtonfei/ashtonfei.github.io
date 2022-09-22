<script setup>
import { reactive, ref } from "vue";
import { Axios } from "axios";
import colors from "vuetify/lib/util/colors";
const loading = ref(false);
const form = ref(null);
const bgColor = ref(colors.grey.lighten4);
const formData = reactive({
  title: {
    value: "",
    type: "text",
    label: "Title",
    hint: "What's the title of your chanllenge?",
    rules: [(v) => !!v || "This is required"],
  },
  name: {
    value: "",
    type: "text",
    label: "Your Name",
    rules: [(v) => !!v || "This is required"],
  },
  email: {
    value: "",
    type: "email",
    label: "Your Email",
    rules: [
      (v) => !!v || "This is required",
      (v) =>
        // eslint-disable-next-line no-useless-escape
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v) || "Must be a valid email",
    ],
  },
  topics: {
    value: ["Apps Script"],
    label: "Select Topics",
    hint: "Enter your own if not in the list",
    multiple: true,
    items: [
      "Apps Script",
      "Workspace Apps",
      "Web App",
      "API Integration",
      "Custom Functions",
    ],
  },
  description: {
    value: "",
    type: "textarea",
    label: "Description",
    placeholder: "Describe your code challenge here here",
    rules: [(v) => !!v || "This is required"],
  },
  links: {
    value: "",
    type: "textarea",
    label: "Links",
    placeholder: "Any online files or loom videos to be shared?",
  },
});

const submit = async () => {
  const result = await form.value.validate();
  if (!result.valid) {
    return;
  }
  loading.value = true;
  const api =
    "https://script.google.com/macros/s/AKfycbyDIIyxQ88jNCp5lFs1c0Nzo7MnH_a9y1IWY38AH5DXtadM-t4NFCLu4J7lP7gRUcps3w/exec";
  const payload = {};
  Object.entries(formData).forEach(([key, value]) => {
    payload[key] = value.value;
  });
  try {
    const res = await new Axios().post(api, payload, { mode: "no-cors" });
    console.log(res);
    loading.value = false;
  } catch (err) {
    console.log("There is an error!");
    console.log(err);
    loading.value = false;
  }
};
</script>

<template>
  <div>
    <v-row>
      <v-col>
        <v-form @submit.prevent="submit" :disabled="loading" ref="form">
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    v-model.trim="formData.title.value"
                    :label="formData.title.label"
                    :hint="formData.title.hint"
                    :type="formData.title.type"
                    :rules="formData.title.rules"
                    :bg-color="bgColor"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-combobox
                    v-model="formData.topics.value"
                    :label="formData.topics.label"
                    :rules="formData.topics.rules"
                    :items="formData.topics.items"
                    :multiple="formData.topics.multiple"
                    :hint="formData.topics.hint"
                    :bg-color="bgColor"
                  ></v-combobox>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="6">
                  <v-textarea
                    v-model="formData.description.value"
                    :label="formData.description.label"
                    :placeholder="formData.description.placeholder"
                    :rules="formData.description.rules"
                    :bg-color="bgColor"
                    rows="8"
                    no-resize
                  ></v-textarea>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-textarea
                    v-model="formData.links.value"
                    :label="formData.links.label"
                    :placeholder="formData.links.placeholder"
                    :rules="formData.links.rules"
                    :bg-color="bgColor"
                    rows="8"
                    no-resize
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    v-model.trim="formData.name.value"
                    :label="formData.name.label"
                    :type="formData.name.type"
                    :rules="formData.name.rules"
                    :bg-color="bgColor"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    v-model.trim="formData.email.value"
                    :label="formData.email.label"
                    :type="formData.email.type"
                    :rules="formData.email.rules"
                    :bg-color="bgColor"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn
                    color="primary"
                    type="submit"
                    size="large"
                    prepend-icon="mdi-code-tags"
                    :disabled="loading"
                  >
                    Submit
                  </v-btn>
                </v-col>
              </v-row>
              <v-divider class="my-4"></v-divider>
              <small
                >Thanks for using this form. You will be notified with an email
                and I will review your request as soon as I can.</small
              >
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
