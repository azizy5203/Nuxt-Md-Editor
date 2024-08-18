export default defineEventHandler(event => {
    const params = getRouterParams(event)
    console.log("🚀 ~ params.name:", params.name)
    return {
        user: {
            name: params.name,
            age: 25,
            email: "mail@mail.com",
        }
    }
})