# data-registry-costings

Baseline costings for writing raw data to chain. 

All data is writen to a simple mapping data structure using a key:value. 

## Results (single write)

* All tests at **GAS price 10 (gwei)**
* Gas usage worked out with a price of **$210 per ETH**

#### Strings

| Length | Gas Used | Costs ($) |
|---|---|---|
| 20  | 437060000000000  | $0.0917826  |
| 40  | 842470000000000  | $0.1769187  |
| 100  | 1253750000000000  | $0.2632875  |
| 200  | 1871690000000000  | $0.39305490000000004  |

#### Bytes

| Length | Gas Used | Costs ($) |
|---|---|---|
| 20  | 435580000000000  | $0.09147179999999999  |
| 40  | 840990000000000  | $0.1766079  |
| 100  | 1252270000000000  | $0.2629767 |
| 200  | 1870210000000000  | $0.3927441  |

#### uint256 (Unsigned 256 bit integers)

* 10 digital number used `419040000000000` GAS at an approximate cost of `$0.0879984` 

## Results (overrides)

* Same costing model as above

* Data overwritten using the same key which will reduce the storage slot initialisation costs

#### Strings

| type | Length | Gas Used | Costs ($) |
|---|---|---|---|
| initial write | 100  | 1253750000000000  | $0.2632875 |
| update | 100   |  461750000000000 | $0.0969675 |

#### Bytes

| type | Length | Gas Used | Costs ($) |
|---|---|---|---|
| initial write | 100  | 1252270000000000  | $0.2629767 | 
| update | 100   | 460270000000000  | $0.0966567 | 

#### uint256

| type | Length | Gas Used | Costs ($) |
|---|---|---|---|
| initial write | 10 digits  | 419040000000000  | $0.0879984 | 
| update | 10 digits | 227040000000000  | $0.047678399999999996 | 
