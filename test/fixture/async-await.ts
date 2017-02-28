async function test(): Promise<void> {
  await new Promise(resolve => {
    setImmediate(resolve)
  })
}

test()
