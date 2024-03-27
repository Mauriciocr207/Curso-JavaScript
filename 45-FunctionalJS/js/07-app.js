const getClient = () => (() => console.log('Hi!'));

const sayHi = getClient();
console.log(sayHi);

sayHi();

const fn = () => {
    return  () => {
        return () => {
            return () => {
                console.log('hey');
            }
        }
    }
}

fn()()()()