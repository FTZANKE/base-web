// 获取数据类型
export const getType = (data: any): string => Object.prototype.toString.call(data).slice(8, -1)

// 判断对象上是否有某个属性
export const hasOwn = (target: object, key: string): boolean => Object.prototype.hasOwnProperty.call(target, key)

// 判断对象上是否有某个属性有的话返回属性值没有的话返回默认值
export const hasOwnDefault = (target: object, key: string, defaultValue: any): any => (hasOwn(target, key) ? target[key] : defaultValue)

// 判断是否为字符串数字
export const isSNumber = (snumber: string): boolean => /^\d+(\.\d+)?$/.test(snumber) || /^(-((\d+\.\d*[1-9]\d*)|(\d*[1-9]\d*\.\d+)|(\d*[1-9]\d*)))$/.test(snumber)

// 检查是否是空值
export const checkEmpty = (value: any): boolean => ![undefined, null, ''].includes(value)
