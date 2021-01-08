~~function () {
    let regBase = {
        // 账号：12位数字，不能是0开头
        accountNum(num) {
            let reg = /^[1-9]\d{11}$/
            return reg.test(num)
        },
        // 密码：6位数字
        pwd(num) {
            let reg = /^\d{6}$/
            return reg.test(num)
        },
        // 姓名：全是汉字，至少两个，最多18个字）
        name(str) {
            let reg = /^[\u4e00-\u9fa5]{2,18}$/
        },
        // 身份证号码：必须为18位，不能以0开头，最后一位可能是数字或者字母xX
        idCar(str) {
            let reg = /^[1-9]\d{16}(\d|x|X)$/
            return reg.test(str)
        },
        // 邮箱：longjiang.gg_dd@yeah.com.cn
        email(str) {
            let reg = /^[a-zA-Z0-9]+(\.[\w-]+)*@[\w-]+(\.[\w-]+){1,2}$/
            return reg.test(str)
        },
        // 手机号：11位 第一位是1，第二位不能是0 1和2，其他的没有要求
        phone(num) {
            let reg = /^1[3-9]\d{9}$/
            return reg.test(num)
        },
          // 姓名：全是汉字，至少两个，最多18个字）
          add(str) {
            let reg = /^[\u4e00-\u9fa5]{9,}$/
        },
    }
    window.regBase = regBase
    console.log(regBase.phone(10281103916))

}()