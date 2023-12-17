export const FakeLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if(username === 'admin' && password === 'password') {
                resolve({succes: true})
            }else {
                reject(new Error('Invalid credentials'));
            }
        }, 2000)
        }
)};
