# Tree View

폴더/파일 구조를 웹으로 표현해내는 과제입니다. 상세 내용은 아래 TODO 부분을 참고해주세요.

## Setup

Install dependencies

```sh
$ yarn install (or npm install)
```

## Development

```sh
$ yarn dev (or npm run dev)
# visit http://localhost:8080
```

- HTML 수정: `index.ejs`를 수정하시면 됩니다.
- JS 수정: `/app/index.js`를 수정하시면 됩니다.
- CSS 수정: `/assets/styles/index.less`를 수정하시면 됩니다. (파일 형식을 `.scss`로 바꿔서 SCSS를 사용하여도 됩니다.)

## TODO

1. 초기 구동시에는 `/app/data.js`를 이용하여 초기 구조를 형성해야 합니다. (`data.js` 수정시, UI 구조에 자동으로 반영될 수 있어야 합니다.)
2. 각 폴더에는 파일을 생성할 수 있는 버튼이 있어야 합니다.
3. 파일을 더블 클릭할 경우, 폴더로 변경됩니다.
4. 파일이나 폴더를 생성할 경우, `/app/data.js`에서 가져온 객체(`TREE_DATA`)에도 정보를 수정/추가해야 합니다.
5. 리포지토리에 첨부된 `TreeView.mp4` 동영상을 참고하세요.

![Tree View](/tree-view.gif)

## 과제 진행 및 제출 방법

해당 명령어에 대해서는 각자 찾아보시고 잘 모르시면 물어보세요.

1. 과제 Repository `git clone`
2. 작업 브랜치 생성 `git branch` or `git checkout -b`
3. < 과제 작업 >
4. 수정 사항 `git add`
5. 수정 사항 `git commit`
6. 본인 Repository에 작업한 브랜치 `git push`
7. 작업한 브랜치 -> `master` 브랜치로 Pull Request 열기
8. 끝

## [webpack](https://webpack.js.org/)
If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
