/**
 * Created by Administrator on 2017/4/9.
 */
function replaceBlank ( str ) {
	return str.replace(/\s/g,'%20');
};

function main (  ) {
	let str = 'allo my friend';
	console.log(replaceBlank(str));
}
main();