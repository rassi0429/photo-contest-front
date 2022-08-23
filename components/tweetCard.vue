<template>
  <div>
    <v-card flat outlined max-width="400" class="mt-3">
      <v-card-title>
        <v-list-item class="pl-0">
          <v-list-item  class="pl-0" :href="`https://twitter.com/${t.user.screen_name}/status/${t.id_str}`" target="_blank">
            <v-list-item-avatar color="grey" size="40">
              <v-img :src="t.user.profile_image_url" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ t.user.name.length > 15 ? t.user.name.slice(0, 15) + "..." : t.user.name }}</v-list-item-title>
              <v-list-item-subtitle class="font-weight-light">@{{ t.user.screen_name }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-spacer />
          <v-list-item-action>
            <v-icon color="blue">mdi-twitter</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-card-title>

      <v-card-text class="text--primary">
        <p> {{t.text}} </p>
        <div v-for="(m, i) in t.extended_entities?.media" :key="i" class="pt-1">
          <v-img :src="m.media_url"></v-img>
        </div>
        <div v-for="(m, i) in t.extended_tweet?.extended_entities?.media" :key="i" class="pt-1">
          <v-img :src="m.media_url"></v-img>
        </div>
      </v-card-text>
      <v-card-actions>
        <!-- <v-btn v-for="button in buttons" :key="button.icon" :href="button.url" :color="button.color" icon>
          <v-icon>{{ button.icon }}</v-icon>
        </v-btn> -->
        <v-spacer />
        <span class="body-2 font-weight-light">{{ t.created_at }}</span>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TwitterCard",
  props:["t"]
}
</script>