<template>
  <v-footer :app="app" color="secondary" dark class="caption" min-height="32">
    <v-row no-gutters justify="space-between">
      <v-col cols="12" sm="auto" class="text-center">
        {{ $date().format('YYYY') }},
        <a href="https://inshopcrm.com" class="white--text" target="_blank">
          Myshop CRM </a
        >, v3.0.1
      </v-col>
      <v-col cols="12" sm="auto" class="text-center">
        {{ $t('powered_by') }}
        <a href="https://inshopgroup.com" class="white--text" target="_blank">
          Myshop Group
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterSlot',
  props: {
    app: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
