/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
export const getProperty = (path, object) => path.reduce((obj, p) => (!!obj) ? obj[p] : null, object);
/** @type {?} */
export const setProperty = (path, value, object, falsyTransformer) => {
    /** @type {?} */
    const lastKeyIndex = path.length - 1;
    for (let i = 0; i < lastKeyIndex; ++i) {
        /** @type {?} */
        const key = path[i];
        if (!(key in object)) {
            object[key] = {};
        }
        object = object[key];
    }
    object[path[lastKeyIndex]] = (!value || (typeof value === 'string' && value === 'false'))
        && !!falsyTransformer ? falsyTransformer() : value;
};
/** @type {?} */
export const defaultConfig = {
    allowNull: true,
    prefix: 'ngx_local_storage'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbG9jYWxzdG9yYWdlLyIsInNvdXJjZXMiOlsibGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0EsYUFBYSxXQUFXLEdBQUcsQ0FBQyxJQUFjLEVBQUUsTUFBVyxFQUFFLEVBQUUsQ0FDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQVEsRUFBRSxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzs7QUFFckUsYUFBYSxXQUFXLEdBQUcsQ0FBQyxJQUF1QixFQUFFLEtBQVUsRUFBRSxNQUFXLEVBQUUsZ0JBQTRCLEVBQUUsRUFBRTs7SUFDNUcsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksRUFBRSxFQUFFLENBQUMsRUFBRTs7UUFDckMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRTtZQUNwQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN0QjtJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssS0FBSyxPQUFPLENBQUMsQ0FBQztXQUN0RixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztDQUNwRCxDQUFDOztBQUVGLGFBQWEsYUFBYSxHQUFpQjtJQUN6QyxTQUFTLEVBQUUsSUFBSTtJQUNmLE1BQU0sRUFBRSxtQkFBbUI7Q0FDNUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJvaG9mZmkgb24gMDQuMDQuMjAxNy5cclxuICovXHJcbmltcG9ydCB7TW9kdWxlQ29uZmlnfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb3BlcnR5ID0gKHBhdGg6IHN0cmluZ1tdLCBvYmplY3Q6IGFueSkgPT5cclxuICBwYXRoLnJlZHVjZSgob2JqOiBhbnksIHA6IGFueSkgPT4gKCEhb2JqKSA/IG9ialtwXSA6IG51bGwsIG9iamVjdCk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UHJvcGVydHkgPSAocGF0aDogc3RyaW5nW10gfCBzdHJpbmcsIHZhbHVlOiBhbnksIG9iamVjdDogYW55LCBmYWxzeVRyYW5zZm9ybWVyPzogKCkgPT4gYW55KSA9PiB7XHJcbiAgY29uc3QgbGFzdEtleUluZGV4ID0gcGF0aC5sZW5ndGggLSAxO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGFzdEtleUluZGV4OyArK2kpIHtcclxuICAgIGNvbnN0IGtleSA9IHBhdGhbaV07XHJcbiAgICBpZiAoIShrZXkgaW4gb2JqZWN0KSkge1xyXG4gICAgICBvYmplY3Rba2V5XSA9IHt9O1xyXG4gICAgfVxyXG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XHJcbiAgfVxyXG4gIG9iamVjdFtwYXRoW2xhc3RLZXlJbmRleF1dID0gKCF2YWx1ZSB8fCAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSA9PT0gJ2ZhbHNlJykpXHJcbiAgJiYgISFmYWxzeVRyYW5zZm9ybWVyID8gZmFsc3lUcmFuc2Zvcm1lcigpIDogdmFsdWU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZzogTW9kdWxlQ29uZmlnID0ge1xyXG4gIGFsbG93TnVsbDogdHJ1ZSxcclxuICBwcmVmaXg6ICduZ3hfbG9jYWxfc3RvcmFnZSdcclxufTtcclxuIl19