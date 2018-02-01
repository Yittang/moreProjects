(function() {
	function writeCode(code, fn) {
		let container = document.querySelector("#code")
		let styleTag = document.querySelector("#styleTag")
		let count = 0
		let time = setTimeout(function run() {
			count += 1
			container.innerHTML = code.substring(0, count)
			styleTag.innerHTML =  code.substring(0, count)
			container.scrollTop = container.scrollHeight
			if(count < code.length) {
				time = setTimeout(run, 50)
			}
		}, 50)
	}

	let code = `
	/*
	*Hello！你好啊！想必你童年也经常看那个神奇的猫吧=>“哆啦A梦”
	*今天我就准备把一直会动的“哆啦A梦”送给你，接下来就请慢慢看我画吧！
	*/
	/*
	*首先来让我们画脸
	*/
		.face {
			position: relative;
			width: 320px;
			height: 320px;
			border: 2px solid #000;
			border-radius: 50%;
			background: #1E90FF;
		}
	/*
	*然后来让我们画它的脸颊，大白脸颊！(羡慕)
	*/
		.cheek {
			position: absolute;
			bottom: 0;
			left: 8px;
			width: 300px;
			height: 267px;
			background: #fff;
			border: 2px solid #000;
			border-radius: 50%;
		}
	/*
	*画它可爱的双眼，大的出奇！女生最爱:)
	*/
		.eyes {
			position: relative;
		}

		.eye {
			position: absolute;
			top: 13px;
			width: 75px;
			height: 90px;
			border: 2px solid #000;
			border-radius: 44%;
			background: #fff;
		}

		.eye-left {
			right: 50%;
		}

		.eye-right {
			left: 50%;
		}

		.eyeBall {
			position: absolute;
			top: 47px;
			width: 17px;
			height: 17px;
			border-radius: 50%;
			background: #000;
		}

		.eyeBall-left {
			right: 10px;
		}

		.eyeBall-right {
			left: 10px;
		}
	/*
	*接下来就是它如小丑般的大红鼻子！
	*/
		.nose {
			position: absolute;
			top: 90px;
			left: 50%;
			margin-left: -22px;
			width: 44px;
			height: 44px;
			background: #ff0000;
			border: 2px solid #000;
			border-radius: 50%
		}

		.nose-light {
			position: absolute;
			top: 7px;
			right: 7px;
			width: 13px;
			height: 13px;
			border-radius: 50%;
			background: #fff;
			box-shadow: 0 0 5px 0 #fff;
		}

		.nose_2 {
			position: absolute;
			top: 134px;
			left: 50%;
			width: 2px;
			height: 115px;
			border: 1px solid #000;
		}
	/*
	*猫怎么能没有胡须呢？
	*/
		.whiskers {
			position: absolute;
			top: 100px;
			width: 159px;
			height: 159px;
		}

		.whiskers-left {
			right: 50%;
		}

		.whiskers-right {
			left: 50%;
		}

		.whiskers .whisker {
			position: absolute;
			width: 77px;
			height: 53px;
			border-top: 2px solid #000;
		}

		.whiskers-left .whisker:nth-child(1) {
			top: 30px;
			left: 36px;
			transform: rotate(20deg);
		}

		.whiskers .whisker:nth-child(2) {
			top: 60px;
			left: 42px;
			transform: rotate(0deg);
		}

		.whiskers-left .whisker:nth-child(3) {
			top: 90px;
			left: 54px;
			transform: rotate(-20deg);
		}

		.whiskers-right .whisker:nth-child(1) {
			top: 30px;
			right: 36px;
			transform: rotate(-20deg);
		}

		.whiskers-right .whisker:nth-child(3) {
			top: 90px;
			right: 54px;
			transform: rotate(20deg);
		}
	/*
	*然后就是它so big的嘴巴
	*/
		.mouth {
			position: absolute;
			bottom: 65px;
			left: 50%;
			width: 212px;
			height: 176px;
			margin-left: -106px;
			border-bottom: 2px solid #000;
			border-radius: 0 0 45% 45%;
		}
	/*
	*它长戴的围巾！
	*/
		.scarf {
			position: absolute;
			bottom: -3px;
			right: 50%;
			margin-right: -141px;
			width: 282px;
			height: 44px;
			background: #ff0000;
			border: 2px solid #000;
			border-radius: 20px;
		}
	/*
	*最后就是它的标志之一！铃铛！叮叮当当
	*/
		.bell {
			position: absolute;
			bottom: -28px;
			right: 50%;
			margin-right: -26px;
			width: 52px;
			height: 52px;
			background: #ffff00;
			border: 2px solid #000;
			border-radius: 50%;
			overflow: hidden;
		}

		.line {
			position: absolute;
			border-bottom: 2px solid #000;
		}

		.row-top-line {
			top: 8px;
			left: 0;
			width: 50px;
		}

		.row-bottom-line {
			top: 15px;
			left: 0;
			width: 50px;
		}

		.small-bell {
			position: absolute;
			top: 24px;
			left: 50%;
			margin-left: -6px;
			width: 12px;
			height: 8px;
			border-radius: 50%;
			background: #000;
		}

		.col-line {
			position: absolute;
		    top: 32px;
		    left: 50%;
		    height: 16px;
		    margin-left: -1px;
		    border-right: 2px solid #000;
		}
	`

	writeCode(code)
})()