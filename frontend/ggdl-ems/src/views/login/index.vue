<template>
  <div class="login">
    <el-card>
      <h2>管理系统-登录</h2>
      <!-- .native 表示对一个组件绑定系统原生事件
           .prevent 表示提交以后不刷新页面 -->
      <el-form
        class="login-form"
        :model="loginForm"
        :rules="rules"
        ref="form"
        @submit.native.prevent="login"
      >
        <!-- 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="用户名"
            prefix-icon="fas fa-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="输入密码"
            type="password"
            prefix-icon="fas fa-lock"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="rePassword">
          <el-input
            v-model="loginForm.rePassword"
            placeholder="确认密码"
            type="password"
            prefix-icon="fas fa-lock"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            native-type="submit"
            block
          >
            登 录
          </el-button>
        </el-form-item>
        <a class="forgot-password" href="https://oxfordinformatics.com/">
          Forgot password ?
        </a>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// @代表的是 /src
import { isValidUserNm, isValidPwd } from '@/utils/validate'
import { loginApi } from '@/api/login'

export default {
  name: 'login',
  data() {
    // https://www.qb5200.com/article/112034.html
    // 对于有些需要自定义的校验规则可以作为变量写在data中
    // let reg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{6,12}$/
    // var validateNewPwd = (rule, value, callback) => {
    //   if (!reg.test(value)) {
    //     callback(new Error('密码应是6-12位数字、字母或字符！'))
    //   }else if(this.form.old)
    // }
    // https://www.cnblogs.com/w-yue/p/11818290.html 参考
    const validUserNm = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else if (!isValidUserNm(value)) {
        callback(
          new Error(
            '用户名要求数字、字母、下划线的组合 数字和字母必须存在 长度为4-15个字符'
          )
        )
      } else {
        callback()
      }
    }

    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (!isValidPwd(value)) {
        callback(
          new Error('密码以字母开头 长度在8~18之间 只能包含字母、数字和下划线')
        )
      } else {
        if (this.loginForm.rePassword !== '') {
          this.$refs.form.validateField('rePassword')
        }
        callback()
      }
    }

    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入确认密码'))
      } else if (value !== this.loginForm.password) {
        callback(new Error('两次输入密码不一致！'))
      } else {
        callback()
      }
    }

    return {
      // form: {
      //   newPassword: '',
      //   confirmPwd: ''
      // },
      validCredentials: {
        username: 'kele5215',
        password: 'a123456'
      },
      loginForm: {
        username: '',
        password: '',
        rePassword: ''
      },
      loading: false,
      // https://www.cnblogs.com/xyyt/p/13366812.html Element UI中对Form表单验证的使用介绍
      rules: {
        // 表单验证规则
        username: [
          // {
          //   required: true,
          //   message: '请输入账号',
          //   trigger: 'blur'
          // },
          // {
          //   min: 4,
          //   max: 10,
          //   message: '长度在4 到 10 个字符',
          //   trigger: 'blur'
          // },
          { required: true, validator: validUserNm, trigger: 'blur' }
          // {
          //   required: true,
          //   pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9.·-]+$/,
          //   message: '姓名不支持特殊字符',
          //   trigger: 'blur'
          // }
        ],
        password: [
          // { required: true, message: '请输入密码', trigger: 'blur' },
          // {
          //   min: 5,
          //   message: 'Password length should be at least 5 characters',
          //   trigger: 'blur'
          // }
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        rePassword: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    simulateLogin() {
      return new Promise(resolve => {
        setTimeout(resolve, 800)
      })
    },
    // async函数返回的是一个Promise对象，
    // 如果在函数中return一个直接量，
    // async会把这个直接量通过Promise.resolve()封装成一个Promise对象
    //console.log(helloAsync())  // Promise {<resolved>: "helloAsync"}
    // async 函数中可能会有 await 表达式，
    // async 函数执行时，如果遇到 await 就会先暂停执行 ，
    // 等到触发的异步操作完成后，恢复 async 函数的执行并返回解析值
    // https://www.runoob.com/w3cnote/es6-async.html
    async login() {
      let valid = await this.$refs.form.validate()
      if (!valid) {
        return
      }
      this.loading = true
      await this.simulateLogin()
      loginApi(this.loginForm)
        .then(res => {
          console.log('res: ' + res)
          console.log(this.loginForm.username)
          console.log(res.data.username)
          if (this.loginForm.username === res.data.data.username) {
            this.$message.success('登录成功')
          } else {
            this.$message.error('账号或密码错误')
          }
        })
        .catch(err => {
          console.log(err)
        })
      this.loading = false
      if (
        this.model.username === this.validCredentials.username &&
        this.model.password === this.validCredentials.password
      ) {
        this.$message.success('Login successfull')
      } else {
        this.$message.error('Username or password is invalid')
      }
>>>>>>> e42342a1ba64ef0de4cc7b53b9dcf1d31c79e37a
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 430px;
}
.forgot-password {
  margin-top: 10px;
}
</style>
<style lang="scss">
$teal: rgb(0, 124, 137);
.el-button--primary {
  background: $teal;
  border-color: $teal;

  &:hover,
  &.active,
  &:focus {
    background: lighten($teal, 7);
    border-color: lighten($teal, 7);
  }
}
.login .el-input__inner:hover {
  border-color: $teal;
}
.login .el-input__prefix {
  background: rgb(238, 237, 234);
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
  .el-input__icon {
    width: 30px;
  }
}
.login .el-input input {
  padding-left: 35px;
}
.login .el-card {
  padding-top: 0;
  padding-bottom: 30px;
}
h2 {
  font-family: 'Open Sans';
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
}
a {
  color: $teal;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    color: lighten($teal, 7);
  }
}
.login .el-card {
  width: 480px;
  display: flex;
  justify-content: center;
}
</style>
