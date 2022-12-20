const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        taskListeners: './src/modules/task-listeners.js',
        task: './src/modules/task.js',
        domController: './src/modules/dom-controller.js',
        project: './src/modules/project.js',
        projectModalListeners: './src/modules/project-modal-listeners.js',
        defaultState: './src/modules/default-state.js',
        localStorage: './src/modules/local-storage.js',
        mainContentProjectListeners: './src/modules/main-content-project-listeners.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'To Do List App',
            template: './src/index.html',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};