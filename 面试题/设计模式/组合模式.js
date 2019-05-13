const MacroCommand = function () {
    return {
        list: [],
        add (task) {
            this.list.push(task);
        },
        excute () {
            this.list.forEach(cmd => {
                cmd.excute();
            });
        }
    }
}


const command1 = MacroCommand() // 基本对象

command1.add({
  excute: () => console.log('煮咖啡') // ②: 基本对象调用这里的 excute,
})

const command2 = MacroCommand() // 组合对象

command2.add({
  excute: () => console.log('打开电视')
})

command2.add({
  excute: () => console.log('打开音响')
})

const command3 = MacroCommand()

command3.add({
  excute: () => console.log('打开空调')
})

command3.add({
  excute: () => console.log('打开电脑')
})

const macroCommand = MacroCommand()
macroCommand.add(command1)
macroCommand.add(command2)
macroCommand.add(command3)

macroCommand.excute()