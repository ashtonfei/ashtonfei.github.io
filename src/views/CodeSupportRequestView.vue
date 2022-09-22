<script setup>
import { reactive, ref } from "vue";
import { Axios } from "axios";
import colors from "vuetify/lib/util/colors";
const loading = ref(false);
const form = ref(null);
const bgColor = ref(colors.grey.lighten4);
const formData = reactive({
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
  service: {
    value: "Google Apps Script",
    label: "Select a Service",
    items: [
      "Google Apps Script",
      "Google Workspace Apps",
      "Web App",
      "API Integration",
    ],
  },
  budget: {
    value: 50,
    type: "number",
    label: "Budget",
    min: 50,
    max: 5000,
    step: 1,
    rules: [(v) => !!v || "This is required"],
  },
  dueDate: {
    value: "",
    type: "date",
    label: "Due Date",
    rules: [(v) => !!v || "This is required"],
  },
  description: {
    value: "",
    type: "textarea",
    label: "Description",
    placeholder: "Describe your request or project here",
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
                <v-col cols="12" sm="12" md="4">
                  <v-autocomplete
                    v-model.trim="formData.service.value"
                    :label="formData.service.label"
                    :rules="formData.service.rules"
                    :items="formData.service.items"
                    :bg-color="bgColor"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                  <v-text-field
                    v-model.number="formData.budget.value"
                    :label="formData.budget.label"
                    :type="formData.budget.type"
                    :min="formData.budget.min"
                    :max="formData.budget.max"
                    :step="formData.budget.step"
                    :rules="formData.budget.rules"
                    :bg-color="bgColor"
                    prefix="$"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                  <v-text-field
                    v-model="formData.dueDate.value"
                    :label="formData.dueDate.label"
                    :type="formData.dueDate.type"
                    :rules="formData.dueDate.rules"
                    :bg-color="bgColor"
                  ></v-text-field>
                </v-col>
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
