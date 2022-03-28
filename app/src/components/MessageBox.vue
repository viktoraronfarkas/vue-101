<template>
<div class="message-box alert alert-info">
{{ message }}
</div>
</template>

<script>
export default {
  name: 'MessageBox',
  props: {
    message: String
  }
}
</script>