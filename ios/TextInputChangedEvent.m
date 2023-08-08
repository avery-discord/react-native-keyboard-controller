//
//  TextInputChangedEvent.m
//  KeyboardController
//
//  Created by Kiryl Ziusko on 05/06/2023.
//  Copyright © 2023 Facebook. All rights reserved.
//

#import "TextInputChangedEvent.h"
#import <React/RCTAssert.h>

@implementation TextInputChangedEvent {
  NSNumber *_previous;
  NSNumber *_current;
  uint16_t _coalescingKey;
}

@synthesize viewTag = _viewTag;
@synthesize eventName = _eventName;

- (instancetype)initWithReactTag:(NSNumber *)reactTag
                        previous:(NSNumber *)previous
                         current:(NSNumber *)current
{
  RCTAssertParam(reactTag);

  if ((self = [super init])) {
    _viewTag = reactTag;
    _eventName = @"onTextInputChanged";
    _previous = previous;
    _current = current;
    _coalescingKey = 0;
  }
  return self;
}

RCT_NOT_IMPLEMENTED(-(instancetype)init)

- (uint16_t)coalescingKey
{
  return _coalescingKey;
}

- (NSDictionary *)body
{
  NSDictionary *body = @{
    @"current" : _current,
    @"previous" : _previous,
  };

  return body;
}

- (BOOL)canCoalesce
{
  return NO;
}

- (TextInputChangedEvent *)coalesceWithEvent:(TextInputChangedEvent *)newEvent
{
  return newEvent;
}

+ (NSString *)moduleDotMethod
{
  return @"RCTEventEmitter.receiveEvent";
}

- (NSArray *)arguments
{
  return @[ self.viewTag, RCTNormalizeInputEventName(self.eventName), [self body] ];
}

@end
