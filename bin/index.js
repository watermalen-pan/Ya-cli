#! /usr/bin/env node

const { program } = require('commander');
// const chalk = require('chalk');


const VERSION = require('../package.json').version;

program
    // 定义命令和参数
    .command('create <app-name>')
    .description('create a new project')
    // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
    .option('-f, --force', 'overwrite target directory if it exist')
    .action((name, options) => {
        const createFn = require('../lib/create')
        // 在 create.js 中执行创建任务
        createFn(name, options);
    })

program
    // 配置版本号信息
    .version(`v${VERSION}`)
    .usage('<command> [option]')

// 解析用户执行命令传入参数
program.parse(process.argv);
