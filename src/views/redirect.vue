<script setup>
const router = useRouter()
const route = useRoute()

const { params, query } = route

router.replace({ path: params.path, query })
</script>
